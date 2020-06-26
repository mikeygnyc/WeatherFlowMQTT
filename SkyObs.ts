import { IEvent } from "./IEvent";
import { PrecipitationType } from "./PrecipitationType";

export class SkyObservation{
    constructor(event:IEvent){
        this.rawEvent=event;
        if (event.obs && event.obs.length>0){
            let eventObs=event.obs[event.obs.length-1];
            this.timeEpoch=eventObs[0];
            this.illuminance=eventObs[1];
            this.uv=eventObs[2];
            this.rainAccum=eventObs[3];;
            this.windLull=eventObs[4];
            this.windAvg=eventObs[5];
            this.windGust=eventObs[6];
            this.windDir=eventObs[7];
            this.battery=eventObs[8];
            this.reportInterval=eventObs[9];
            this.solarRadiation=eventObs[10];
            this.localDayRainAccum=eventObs[11];
            this.precipType=eventObs[12];
            this.windSampleInterval=eventObs[13];
          
        } else {
            this.timeEpoch=Date.now();
           
            this.illuminance=0;
            this.uv=0;
            this.rainAccum=0;
            this.windLull=0;
            this.windAvg=0;
            this.windGust=0;
            this.windDir=0;
            this.battery=0;
            this.reportInterval=0;
            this.solarRadiation=0;
            this.localDayRainAccum=0;
            this.precipType=0;
            this.windSampleInterval=0;
        }
        
    }
    rawEvent:IEvent;
    timeEpoch:number;
    illuminance:number;
    uv:number;
    rainAccum:number;
    windLull:number;
    windAvg:number;
    windGust:number;
    windDir:number;
    solarRadiation:number;
    localDayRainAccum:number;
    precipType:PrecipitationType;
    windSampleInterval:number;
    battery:number;
    reportInterval:number
}

