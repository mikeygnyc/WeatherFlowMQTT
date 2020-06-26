import { IEvent } from "./IEvent";
import { PrecipitationType } from "./PrecipitationType";

export class TempestObservation{
    constructor(event:IEvent){
        this.rawEvent=event;
        if (event.obs){
            this.timeEpoch=event.obs[0];
            this.windLull=event.obs[1];
            this.windAvg=event.obs[2];
            this.windGust=event.obs[3];
            this.windDir=event.obs[4];
            this.windSampleInterval=event.obs[5];
            this.stationPressure=event.obs[6];
            this.airTemperature=event.obs[7];
            this.relativeHumidity=event.obs[8];
            this.illuminance=event.obs[9];
            this.uv=event.obs[10];
            this.solarRadiation=event.obs[11];
            this.rainAccum=event.obs[12];;
            this.precipType=event.obs[13];
            this.lightningStrikeCount=event.obs[14];
            this.lightningStrikeAvgDist=event.obs[15];
            this.battery=event.obs[16];
            this.reportInterval=event.obs[17];
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



