import { IEvent } from "./IEvent";

export class RainEvent{
    constructor(event:IEvent){
        this.rawEvent=event;
        if (event.evt){
            this.timeEpoch=event.evt[0];
        } else {
            this.timeEpoch=Date.now();
        }
        
    }
    rawEvent:IEvent;
    timeEpoch:number;
}