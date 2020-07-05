import { IEvent } from "./IEvent";

export class HubEvent{
    constructor(event:IEvent){
        this.rawEvent=event;
        this.serial_number=event.serial_number;
        this.timestamp=event.timestamp?event.timestamp:-1;
        this.uptime=event.uptime?event.uptime:-1;
        this.firmware_revision=event.firmware_revision?event.firmware_revision:-1;
        this.rssi=event.rssi?event.rssi:-1;
        this.reset_flags=event.reset_flags?event.reset_flags:"";
        this.seq=event.seq?event.seq:-1;
        this.fs=event.fs?event.fs:new Array<number>();
        this.radio_stats=event.radio_stats?event.radio_stats:new Array<number>();;
        this.mqtt_stats=event.mqtt_stats?event.mqtt_stats:new Array<number>();;
        this.brownout_reset=this.reset_flags.includes("BOR");
        this.pin_reset=this.reset_flags.includes("PIN");
        this.power_reset=this.reset_flags.includes("POR");
        this.software_reset=this.reset_flags.includes("SFT");
        this.watchdog_reset=this.reset_flags.includes("WDG");
        this.window_watchdog_reset=this.reset_flags.includes("WWD");
        this.low_power_reset=this.reset_flags.includes("LPW");
        this.radio_version=this.radio_stats[0];
        this.radio_reboot_ct=this.radio_stats[1];
        this.radio_i2c_bus_error_ct=this.radio_stats[2];
        this.radio_status=this.radio_stats[3];
        this.radio_network_id=this.radio_stats[4];
        
    }
    rawEvent:IEvent;
    serial_number:string;
    timestamp:number;
    uptime:number;
    firmware_revision:number;
    rssi:number;
    reset_flags:string;
    seq:number;
    fs:number[];
    radio_stats:number[];
    mqtt_stats:number[];
    brownout_reset:boolean;
    pin_reset:boolean;
    power_reset:boolean;
    software_reset:boolean;
    watchdog_reset:boolean;
    window_watchdog_reset:boolean;
    low_power_reset:boolean;
    radio_version:number;
    radio_reboot_ct:number;
    radio_i2c_bus_error_ct:number;
    radio_network_id:number;
    radio_status:RadioStatus;
}

export enum RadioStatus{
    Radio_Off=0,
    Radio_On=1,
    Radio_Active=3
}


