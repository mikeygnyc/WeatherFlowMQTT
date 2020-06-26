import { IEvent } from "./IEvent";

export class AirObservation{
    constructor(event:IEvent){
        this.rawEvent=event;
        if (event.obs && event.obs.length>0){
            let eventObs=event.obs[event.obs.length-1];
            this.timeEpoch=eventObs[0];
            this.stationPressure=eventObs[1];
            this.airTemperature=eventObs[2];
            this.relativeHumidity=eventObs[3];
            this.lightningStrikeCount=eventObs[4];
            this.lightningStrikeAvgDist=eventObs[5];
            this.battery=eventObs[6];
            this.reportInterval=eventObs[7];
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

