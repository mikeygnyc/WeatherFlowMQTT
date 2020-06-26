import { IEvent } from "./IEvent";

export class AirObservation{
    constructor(event:IEvent){
        this.rawEvent=event;
        if (event.obs){
            this.timeEpoch=event.obs[0];
            this.stationPressure=event.obs[1];
            this.airTemperature=event.obs[2];
            this.relativeHumidity=event.obs[3];
            this.lightningStrikeCount=event.obs[4];
            this.lightningStrikeAvgDist=event.obs[5];
            this.battery=event.obs[6];
            this.reportInterval=event.obs[7];
        } else {
            this.timeEpoch=Date.now();
            this.stationPressure=0;
            this.airTemperature=0;
            this.relativeHumidity=0;
            this.lightningStrikeCount=0;
            this.lightningStrikeAvgDist=0;
            this.battery=0;
            this.reportInterval=0;
        }
        
    }
    rawEvent:IEvent;
    timeEpoch:number;
    stationPressure:number;
    airTemperature:number;
    relativeHumidity:number;
    lightningStrikeCount:number;
    lightningStrikeAvgDist:number;
    battery:number;
    reportInterval:number
}

