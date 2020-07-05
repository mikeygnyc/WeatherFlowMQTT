"use strict";

import * as dgram from "dgram";
import * as winston from "winston";
import * as mqtt from "mqtt";
import * as q from "q";
import { Command } from 'commander'; 
const program = new Command();
import { EventType } from "./EventTypes";
import { CurrentObservation } from "./CurrentObs";
import { IEvent } from "./IEvent";
import { AirObservation } from "./AirObs";
import { SkyObservation } from "./SkyObs";
import { TempestObservation } from "./TempestObs";
import { RapidWindEvent } from "./RapidWindEvent";
import { MqttClient } from "mqtt";
import { LightningStrikeEvent } from "./LightningEvent";
import { HardwareStatus } from "./HardwareStatus";

const pkg = require("./package.json");

class Server {
    constructor(mqttUri: string, udpPort: number) {
        this.mqttServer = mqttUri;
        this.listenPort = udpPort;
        this.currentObs = new CurrentObservation();
        this.hardwareStat= new HardwareStatus();
        this.init();
    }
    hardwareStat:HardwareStatus;
    currentObs: CurrentObservation;
    mqttServer: string;
    listenPort: number;
    udp!: dgram.Socket;
    mqttClient!: mqtt.Client;

    init() {
        let thys = this;
        q.all([thys.initialiseMQTTClient(this.mqttServer), thys.initialiseSocket(this.listenPort)])
            .then(function () {
                // Bind message events
                thys.currentObs.on("update", thys.doMqttSend.bind(thys));
                thys.hardwareStat.on("update",thys.doMqttSend.bind(thys));
                thys.udp.on("message", thys.onIncomingMessage.bind(thys));
            })
            .then(function () {
                // Start the pulse
                winston.info("Service is ready.");
            })
            .done();
    }
    //@ts-ignore
    initialiseMQTTClient(serverAddress: string) {
        var deferred = q.defer();

        winston.info("Initialising MQTT connection...");
        this.mqttClient = mqtt.connect(serverAddress);
        
        this.mqttClient.on("connect", function () {
            winston.info("MQTT connection established with " + serverAddress);
            deferred.resolve();
        });

        return deferred.promise;
    }

    /**
     * Initialise the UDP socket and start listening for data
     */
    initialiseSocket(port: number) {
        winston.info("Initialising UDP socket...");

        var deferred = q.defer();

        this.udp = dgram.createSocket("udp4");
        let thys = this;
        this.udp.once("listening", function listening() {
            winston.info("UDP: Listening on port " + port);
            deferred.resolve(thys.udp.address());
        });
        this.udp.bind(port);

        return deferred.promise;
    }

    onIncomingMessage(buffer: Buffer, remoteInfo: any) {
        try {
            var payload = buffer.toString();
            let wxobs = JSON.parse(payload) as IEvent;
            let type:EventType=(<any>EventType)[wxobs.type];
            switch (type) {
                case EventType.device_status:
                case EventType.evt_precip:
                case EventType.hub_status:
                    break;
                case EventType.evt_strike:
                    let levt:LightningStrikeEvent = new LightningStrikeEvent(wxobs);
                    this.currentObs.UpdateFromLightningStrike(levt);
                    break;
                case EventType.obs_air:
                    let airObs:AirObservation = new AirObservation(wxobs);
                    this.currentObs.UpdateFromAir(airObs);
                    break;
                case EventType.obs_sky:
                    let skyObs:SkyObservation = new SkyObservation(wxobs);
                    this.currentObs.UpdateFromSky(skyObs);
                    break;
                case EventType.obs_st:
                    let tstObs:TempestObservation = new TempestObservation(wxobs);
                    this.currentObs.UpdateFromTempest(tstObs);
                    break;
                case EventType.rapid_wind:
                    let rapWin:RapidWindEvent = new RapidWindEvent(wxobs);
                    this.currentObs.UpdateFromWind(rapWin);
                    break;

            }
            let topic = `wx/${wxobs.type}`;
            this.mqttClient.publish(topic, payload);
        } catch (e) {
            winston.error(`udp msg error: ${e}`);
        }
    }
    doMqttSend(topic: string, value: number) {
        let opts:mqtt.IClientPublishOptions = {
            retain:true
        };
        this.mqttClient.publish(`wx/${topic}`, value.toString(),opts);
    }
}

function run() {
    program
        .version(pkg.version)
        .option("-m, --mqttServer [string]", "the target mqtt server address.")
        .parse(process.argv);

   
    if (!program.mqttServer) {
        throw new Error("Must specify a target MQTT server address.");
    }

    let server = new Server(program.mqttServer, 50222);
}

run();
