import { IEvent } from "./IEvent";

export class DeviceEvent{
    constructor(event:IEvent){
        this.rawEvent=event;
        this.serial_number=event.serial_number;
        this.hub_sn=event.hub_sn?event.hub_sn:"";
        this.timestamp=event.timestamp?event.timestamp:-1;
        this.uptime=event.uptime?event.uptime:-1;
        this.voltage=event.voltage?event.voltage:-1;
        this.firmware_revision=event.firmware_revision?event.firmware_revision:-1;
        this.rssi=event.rssi?event.rssi:-1;
        this.hub_rssi=event.hub_rssi?event.hub_rssi:-1;
        this.sensor_status=event.sensor_status?event.sensor_status:-1;
        this.debug=event.debug?event.debug===1:false;
        
    }
    rawEvent:IEvent;
    serial_number:string;
    hub_sn:string;
    timestamp:number;
    uptime:number;
    voltage:number;
    firmware_revision:number;
    rssi:number;
    hub_rssi:number;
    sensor_status:number;
    debug:boolean;
}
