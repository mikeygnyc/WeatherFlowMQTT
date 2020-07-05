import { RadioStatus, HubEvent } from "./HubEvent";
import { EventEmitter } from "events";

export class HubStatus extends EventEmitter{
    constructor(){
        super();
    }
    Update(event:HubEvent){
        this.serial_number=event.serial_number;
        this.emit("update", "SerialNumber", this.serial_number);
        this.timestamp=event.timestamp;
        this.emit("update", "Timestamp", this.timestamp);
        this.uptime=event.uptime;
        this.emit("update", "Uptime", this.uptime);
        this.firmware_revision=event.firmware_revision;
        this.emit("update", "FirmwareRev", this.firmware_revision);
        this.rssi=event.rssi;
        this.emit("update", "RSSI", this.rssi);
        this.reset_flags=event.reset_flags;
        this.emit("update", "ResetFlags", this.reset_flags);
        this.seq=event.seq;
        this.emit("update", "Seq", this.seq);
        this.fs=event.fs;
        this.emit("update", "Fs", this.fs);
        this.radio_stats=event.radio_stats;
        this.emit("update", "RadioStats", this.radio_stats);
        this.mqtt_stats=event.mqtt_stats;
        this.emit("update", "MqttStats", this.mqtt_stats);
        this.brownout_reset=event.brownout_reset;
        this.emit("update", "BrownoutReset", this.brownout_reset);
        this.pin_reset=event.pin_reset;
        this.emit("update", "PinReset", this.pin_reset);
        this.power_reset=event.power_reset;
        this.emit("update", "PowerReset", this.power_reset);
        this.software_reset=event.software_reset;
        this.emit("update", "SoftwareReset", this.software_reset);
        this.watchdog_reset=event.watchdog_reset;
        this.emit("update", "WatchdogReset", this.watchdog_reset);
        this.window_watchdog_reset=event.window_watchdog_reset;
        this.emit("update", "WindowWatchdogReset", this.window_watchdog_reset);
        this.low_power_reset=event.low_power_reset;
        this.emit("update", "LowPowerReset", this.low_power_reset);
        this.radio_version=event.radio_version;
        this.emit("update", "RadioVersion", this.radio_version);
        this.radio_reboot_ct=event.radio_reboot_ct;
        this.emit("update", "RadioRebootCount", this.radio_reboot_ct);
        this.radio_i2c_bus_error_ct=event.radio_i2c_bus_error_ct;
        this.emit("update", "I2CBusErrorCount", this.radio_i2c_bus_error_ct);
        this.radio_network_id=event.radio_network_id;
        this.emit("update", "RadioNetworkId", this.radio_network_id);
        this.radio_status=event.radio_status;
        this.emit("update", "RadioStatus", this.radio_status);

    }
    serial_number!:string;
    timestamp!:number;
    uptime!:number;
    firmware_revision!:number;
    rssi!:number;
    reset_flags!:string;
    seq!:number;
    fs!:number[];
    radio_stats!:number[];
    mqtt_stats!:number[];
    brownout_reset!:boolean;
    pin_reset!:boolean;
    power_reset!:boolean;
    software_reset!:boolean;
    watchdog_reset!:boolean;
    window_watchdog_reset!:boolean;
    low_power_reset!:boolean;
    radio_version!:number;
    radio_reboot_ct!:number;
    radio_i2c_bus_error_ct!:number;
    radio_network_id!:number;
    radio_status!:RadioStatus;
}



