import { IEvent } from "./IEvent";
import { PrecipitationType } from "./PrecipitationType";

export class TempestObservation{
    constructor(event:IEvent){
        this.rawEvent=event;
        if (event.obs && event.obs.length>0){
            let eventObs=event.obs[event.obs.length-1];
            this.timeEpoch=eventObs[0];
            this.windLull=eventObs[1];
            this.windAvg=eventObs[2];
            this.windGust=eventObs[3];
            this.windDir=eventObs[4];
            this.windSampleInterval=eventObs[5];
            this.stationPressure=eventObs[6];
            this.airTemperature=eventObs[7];
            this.relativeHumidity=eventObs[8];
            this.illuminance=eventObs[9];
            this.uv=eventObs[10];
            this.solarRadiation=eventObs[11];
            this.rainAccum=eventObs[12];;
            this.precipType=eventObs[13];
            this.lightningStrikeCount=eventObs[14];
            this.lightningStrikeAvgDist=eventObs[15];
            this.battery=eventObs[16];
            this.reportInterval=eventObs[17];
        } else {
            this.timeEpoch=Date.now();
            this.stationPressure=0;
            this.airTemperature=0;
            this.relativeHumidity=0;
            this.lightningStrikeCount=0;
            this.lightningStrikeAvgDist=0;
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
            this.precipType=0;
            this.windSampleInterval=0;
        }
        
    }
    rawEvent:IEvent;
    timeEpoch:number;
    stationPressure:number;
    airTemperature:number;
    relativeHumidity:number;
    lightningStrikeCount:number;
    lightningStrikeAvgDist:number;
    illuminance:number;
    uv:number;
    rainAccum:number;
    windLull:number;
    windAvg:number;
    windGust:number;
    windDir:number;
    solarRadiation:number;
    precipType:PrecipitationType;
    windSampleInterval:number;
    battery:number;
    reportInterval:number
}



