import { IEvent } from "./IEvent";

export class RapidWindEvent{
    constructor(event:IEvent){
        this.rawEvent=event;
        if (event.ob){
            this.timeEpoch=event.ob[0];
            this.windSpeed=event.ob[1];
            this.windDirection=event.ob[2];
        } else {
            this.timeEpoch=Date.now();
            this.windSpeed=0;
            this.windDirection=0;
        }
        
    }
    rawEvent:IEvent;
    timeEpoch:number;
    windSpeed:number;
    windDirection:number;
}
