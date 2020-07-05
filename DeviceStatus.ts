import { IEvent } from "./IEvent";
import { DeviceEvent } from "./DeviceEvent";
import { EventEmitter } from "events";

export class DeviceStatus extends EventEmitter{
    constructor(){
        super();
    }
    Update(event:DeviceEvent){
        this.serial_number=event.serial_number;
        this.emit("update", event.serial_number,"SerialNumber", this.serial_number);
        this.hub_sn=event.hub_sn;
        this.emit("update", event.serial_number,"HubSerialNumber", this.hub_sn);
        this.timestamp=event.timestamp;
        this.emit("update", event.serial_number,"Timestamp", this.timestamp);
        this.uptime=event.uptime;
        this.emit("update", event.serial_number,"Uptime", this.uptime);
        this.voltage=event.voltage;
        this.emit("update", event.serial_number,"Voltage", this.voltage);
        this.firmware_revision=event.firmware_revision;
        this.emit("update", event.serial_number,"FirmwareRevision", this.firmware_revision);
        this.rssi=event.rssi;
        this.emit("update", event.serial_number,"Rssi", this.rssi);
        this.hub_rssi=event.hub_rssi;
        this.emit("update", event.serial_number,"HubRssi", this.hub_rssi);
        this.sensor_status=event.sensor_status;
        this.emit("update", event.serial_number,"SensorStatus", this.sensor_status);
        this.debug=event.debug;
        this.emit("update", event.serial_number,"Debug", this.debug);
    }
    serial_number!:string;
    hub_sn!:string;
    timestamp!:number;
    uptime!:number;
    voltage!:number;
    firmware_revision!:number;
    rssi!:number;
    hub_rssi!:number;
    sensor_status!:number;
    debug!:boolean;
}
