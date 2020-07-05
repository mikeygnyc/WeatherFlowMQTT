import { EventEmitter } from "events";
import { HubStatus } from "./HubStatus";
import { DeviceStatus } from "./DeviceStatus";
import { DeviceEvent } from "./DeviceEvent";
import { HubEvent } from "./HubEvent";
export class HardwareStatus extends EventEmitter {
    constructor() {
        super();
        this.Devices=new Map<string,DeviceStatus>();
        this.Hub=new HubStatus();
        this.Hub.on("update",this.HubParamUpdate.bind(this));
    }
    UpdateHubStatus(hub:HubEvent){
        this.Hub.Update(hub);
    }
    UpdateDeviceStatus(dev:DeviceEvent){
        if (!this.Devices.has(dev.serial_number)){
            let dev:DeviceStatus = new DeviceStatus();
            dev.on("update",this.DeviceParamUpdate.bind(this));
            this.Devices.set(dev.serial_number,dev);
        }
    }
    HubParamUpdate(paramName:string,value:any){
        this.emit("update", `/hub/${paramName}`, value);
    }
    DeviceParamUpdate(devSn:string,paramName:string,value:any){
        this.emit("update", `/devices/${devSn}/${paramName}`, value);
    }
    Hub:HubStatus;
    Devices:Map<string,DeviceStatus>;
}
