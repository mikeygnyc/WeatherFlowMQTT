import { IEvent } from "./IEvent";

export class RapidWindEvent{
    constructor(event:IEvent){
        this.rawEvent=event;
        if (event.evt){
            this.timeEpoch=event.evt[0];
            this.windSpeed=event.evt[1];
            this.windDirection=event.evt[2];
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
