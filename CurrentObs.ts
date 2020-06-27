import { IEvent } from "./IEvent";
import { PrecipitationType } from "./PrecipitationType";
import { EventEmitter } from "events";
import { AirObservation } from "./AirObs";
import { SkyObservation } from "./SkyObs";
import { TempestObservation } from "./TempestObs";
import { RapidWindEvent } from "./RapidWindEvent";
import { LightningStrikeEvent } from "./LightningEvent";

export class CurrentObservation extends EventEmitter {
    constructor() {
        super();
    }
    public UpdateFromLightningStrike(strike:LightningStrikeEvent){
        this.lastLightningStrikeDistance=strike.distance;
        this.lastLightningStrikeEnergy=strike.energy;
        this.lastLightningStrikeTime=strike.timeEpoch;
    }
    public UpdateFromWind(rapidWind:RapidWindEvent){
        this.windSpeedInstant=rapidWind.windSpeed;
        if (rapidWind.windSpeed>0){
            this.windDirInstant=rapidWind.windDirection;
        }
        this.LastUpdate=rapidWind.timeEpoch;
    }
    public UpdateFromAir(airObs:AirObservation){
        this.stationPressure=airObs.stationPressure;
        this.airTemperature=airObs.airTemperature;
        this.relativeHumidity=airObs.relativeHumidity;
        this.lightningStrikeCount=airObs.lightningStrikeCount;
        this.lightningStrikeAvgDist=airObs.lightningStrikeAvgDist;
        this.battery=airObs.battery;
        this.reportInterval=airObs.reportInterval;
        this.LastUpdate=airObs.timeEpoch;
    }
    public UpdateFromSky(skyObs:SkyObservation){
        this.illuminance=skyObs.illuminance;
        this.uv=skyObs.uv;
        this.rainAccum=skyObs.rainAccum;
        this.windLull=skyObs.windLull;
        this.windAvg=skyObs.windAvg;
        this.windGust=skyObs.windGust;
        if (skyObs.windAvg>0){
            this.windDir=skyObs.windDir;
        }
        this.solarRadiation=skyObs.solarRadiation;
        this.precipType=skyObs.precipType;
        this.windSampleInterval=skyObs.windSampleInterval;
        this.battery=skyObs.battery;
        this.reportInterval=skyObs.reportInterval;
        this.LastUpdate=skyObs.timeEpoch;
    }
    public UpdateFromTempest(tempestObs:TempestObservation){
        this.illuminance=tempestObs.illuminance;
        this.uv=tempestObs.uv;
        this.rainAccum=tempestObs.rainAccum;
        this.windLull=tempestObs.windLull;
        this.windAvg=tempestObs.windAvg;
        this.windGust=tempestObs.windGust;
        if (tempestObs.windAvg>0){
            this.windDir=tempestObs.windDir;
        }
        
        this.solarRadiation=tempestObs.solarRadiation;
        this.precipType=tempestObs.precipType;
        this.windSampleInterval=tempestObs.windSampleInterval;
        this.battery=tempestObs.battery;
        this.reportInterval=tempestObs.reportInterval;
        this.stationPressure=tempestObs.stationPressure;
        this.airTemperature=tempestObs.airTemperature;
        this.relativeHumidity=tempestObs.relativeHumidity;
        this.lightningStrikeCount=tempestObs.lightningStrikeCount;
        this.lightningStrikeAvgDist=tempestObs.lightningStrikeAvgDist;
        this.LastUpdate=tempestObs.timeEpoch;
    }
    private _stationPressure!: number;
    public get stationPressure(): number {
        return this._stationPressure;
    }
    public set stationPressure(value: number) {
        if (this._stationPressure !== value) {
            this._stationPressure = value;
            this.emit("update", "StationPressure", value);
        }
    }
    private _airTemperature!: number;
    public get airTemperature(): number {
        return this._airTemperature;
    }
    public set airTemperature(value: number) {
        if (this._airTemperature !== value) {
            this._airTemperature = value;
            this.emit("update", "AirTemperature", value);
        }
    }
    private _relativeHumidity!: number;
    public get relativeHumidity(): number {
        return this._relativeHumidity;
    }
    public set relativeHumidity(value: number) {
        if (this._relativeHumidity !== value) {
            this._relativeHumidity = value;
            this.emit("update", "RelativeHumidity", value);
        }
    }
    private _lastLightningStrikeTime!: number;
    public get lastLightningStrikeTime(): number {
        return this._lastLightningStrikeTime;
    }
    public set lastLightningStrikeTime(value: number) {
        if (this._lastLightningStrikeTime !== value) {
            this._lastLightningStrikeTime = value;
            this.emit("update", "LastLightningStrikeTime", value);
        }
    }
    
    private _lastLightningStrikeDistance!: number;
    public get lastLightningStrikeDistance(): number {
        return this._lastLightningStrikeDistance;
    }
    public set lastLightningStrikeDistance(value: number) {
        if (this._lastLightningStrikeDistance !== value) {
            this._lastLightningStrikeDistance = value;
            this.emit("update", "LastLightningStrikeDistance", value);
        }
    }
    private _lastLightningStrikeEnergy!: number;
    public get lastLightningStrikeEnergy(): number {
        return this._lastLightningStrikeEnergy;
    }
    public set lastLightningStrikeEnergy(value: number) {
        if (this._lastLightningStrikeEnergy !== value) {
            this._lastLightningStrikeEnergy = value;
            this.emit("update", "LastLightningStrikeEnergy", value);
        }
    }
    private _lightningStrikeCount!: number;
    public get lightningStrikeCount(): number {
        return this._lightningStrikeCount;
    }
    public set lightningStrikeCount(value: number) {
        if (this._lightningStrikeCount !== value) {
            this._lightningStrikeCount = value;
            this.emit("update", "LightningStrikeCount", value);
        }
    }
    private _lightningStrikeAvgDist!: number;
    public get lightningStrikeAvgDist(): number {
        return this._lightningStrikeAvgDist;
    }
    public set lightningStrikeAvgDist(value: number) {
        if (this._lightningStrikeAvgDist !== value) {
            this._lightningStrikeAvgDist = value;
            this.emit("update", "LightningStrikeAvgDistance", value);
        }
        
    }
    private _illuminance!: number;
    public get illuminance(): number {
        return this._illuminance;
    }
    public set illuminance(value: number) {
        if (this._illuminance !== value) {
            this._illuminance = value;
            this.emit("update", "Illuminance", value);
        }
    }
    private _uv!: number;
    public get uv(): number {
        return this._uv;
    }
    public set uv(value: number) {
        if (this._uv !== value) {
            this._uv = value;
            this.emit("update", "UV", value);
        }
    }
    private _rainAccum!: number;
    public get rainAccum(): number {
        return this._rainAccum;
    }
    public set rainAccum(value: number) {
        if (this._rainAccum !== value) {
            this._rainAccum = value;
            this.emit("update", "RainAccumulation", value);
        }
    }
    private _windSpeedInstant!: number;
    public get windSpeedInstant(): number {
        return this._windSpeedInstant;
    }
    public set windSpeedInstant(value: number) {
        if (this._windSpeedInstant !== value) {
            this._windSpeedInstant = value;
            this.emit("update", "WindSpeedInstant", value);
        }
    }
    private _windDirInstant!: number;
    public get windDirInstant(): number {
        return this._windDirInstant;
    }
    public set windDirInstant(value: number) {
        if (this._windDirInstant !== value) {
            this._windDirInstant = value;
            this.emit("update", "WindDirInstant", value);
        }
    }
    private _windLull!: number;
    public get windLull(): number {
        return this._windLull;
    }
    public set windLull(value: number) {
        if (this._windLull !== value) {
            this._windLull = value;
            this.emit("update", "WindLull", value);
        }
    }
    private _windAvg!: number;
    public get windAvg(): number {
        return this._windAvg;
    }
    public set windAvg(value: number) {
        if (this._windAvg !== value) {
            this._windAvg = value;
            this.emit("update", "WindAvg", value);
        }
    }
    private _windGust!: number;
    public get windGust(): number {
        return this._windGust;
    }
    public set windGust(value: number) {
        if (this._windGust !== value) {
            this._windGust = value;
            this.emit("update", "WindGust", value);
        }
    }
    private _windDir!: number;
    public get windDir(): number {
        return this._windDir;
    }
    public set windDir(value: number) {
        if (this._windDir !== value) {
            this._windDir = value;
            this.emit("update", "WindDir", value);
        }
    }
    private _solarRadiation!: number;
    public get solarRadiation(): number {
        return this._solarRadiation;
    }
    public set solarRadiation(value: number) {
        if (this._solarRadiation !== value) {
            this._solarRadiation = value;
            this.emit("update", "SolarRadiation", value);
        }
    }
    private _precipType!: PrecipitationType;
    public get precipType(): PrecipitationType {
        return this._precipType;
    }
    public set precipType(value: PrecipitationType) {
        if (this._precipType !== value) {
            this._precipType = value;
            this.emit("update", "PrecipType", value);
        }
    }
    private _windSampleInterval!: number;
    public get windSampleInterval(): number {
        return this._windSampleInterval;
    }
    public set windSampleInterval(value: number) {
        if (this._windSampleInterval !== value) {
            this._windSampleInterval = value;
            this.emit("update", "WindSampleInterval", value);
        }
    }
    private _battery!: number;
    public get battery(): number {
        return this._battery;
    }
    public set battery(value: number) {
        if (this._battery !== value) {
            this._battery = value;
            this.emit("update", "Battery", value);
        }
    }
    private _reportInterval!: number;
    public get reportInterval(): number {
        return this._reportInterval;
    }
    public set reportInterval(value: number) {
        if (this._reportInterval !== value) {
            this._reportInterval = value;
            this.emit("update", "ReportInterval", value);
        }
    }
    private _LastUpdate!: number;
    public get LastUpdate(): number {
        return this._LastUpdate;
    }
    public set LastUpdate(value: number) {
        if (this._LastUpdate !== value) {
            this._LastUpdate = value;
            this.emit("update", "LastUpdate", value);
        }
    }
}
