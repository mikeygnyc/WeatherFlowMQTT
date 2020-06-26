import { EventType } from "./EventTypes";

export interface IEvent{
    serial_number:string;
    type:EventType;
    hub_sn?:string;
    evt?:number[];
    ob?:number[];
    obs?:Array<number[]>;
    timestamp?: number;
    uptime?: number;
    voltage?:number;
    firmware_revision?:number;
    rssi?: number;
    hub_rssi?: number;
    sensor_status?: number;
    debug?: number;
    reset_flags?:string;
    seq?:number;
    fs?:number[];
    radioStats?:number[];
    mqttStats?:number[];
}