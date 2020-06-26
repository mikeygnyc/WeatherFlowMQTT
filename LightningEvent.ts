import { IEvent } from "./IEvent";

export class LightningStrikeEvent{
    constructor(event:IEvent){
        this.rawEvent=event;
        if (event.evt){
            this.timeEpoch=event.evt[0];
            this.distance=event.evt[1];
            this.energy=event.evt[2];
        } else {
            this.timeEpoch=Date.now();
            this.distance=0;
            this.energy=0;
        }
        
    }
    rawEvent:IEvent;
    timeEpoch:number;
    distance:number;
    energy:number;
}
