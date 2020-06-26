import { IEvent } from "./IEvent";
import { PrecipitationType } from "./PrecipitationType";

export class SkyObservation{
    constructor(event:IEvent){
        this.rawEvent=event;
        if (event.obs){
            this.timeEpoch=event.obs[0];
            this.illuminance=event.obs[1];
            this.uv=event.obs[2];
            this.rainAccum=event.obs[3];;
            this.windLull=event.obs[4];
            this.windAvg=event.obs[5];
            this.windGust=event.obs[6];
            this.windDir=event.obs[7];
            this.battery=event.obs[8];
            this.reportInterval=event.obs[9];
            this.solarRadiation=event.obs[10];
            this.localDayRainAccum=event.obs[11];
            this.precipType=event.obs[12];
            this.windSampleInterval=event.obs[13];
          
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

