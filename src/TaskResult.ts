import { Guid } from 'guid-typescript';
import { Process } from './process';
import { Task } from './task';
import { StringTools } from './StringTools';

export class TaskResult {

  public comment: string;

  public formatString: string;

  private _isEqual: number;
  public get isEqual(): number {
    if (this._isEqual) {
      return this._isEqual;
    }
    return -1;
  }

  public set isEqual(v: number) {
    this._isEqual = v;
  }

  //public bool ShouldSerializeIsEqual() { return _isEqual.HasValue; }

  private _lessThan: number;
  public get lessThan(): number {
    if (this._lessThan) {
      return this._lessThan;
    }
    return -1;
  }

  public set lessThan(v: number) {
    this._lessThan = v;
  }

  private _greaterThan: number;
  public get greaterThan(): number {
    if (this._greaterThan) {
      return this._greaterThan;
    }
    return -1;
  }
  public set greaterThan(v: number) {
    this._greaterThan = v;
  }

  private _inBetween: string;
  public get inBetween(): string {
    return this._inBetween;
  }

  private _rangeLow: number;
  private _rangeHigh: number;

  public set inBetween(v: string) {
    this._inBetween = v;
    const lowandhigh = this._inBetween.split(',');
    if (lowandhigh.length === 2) {
      this._rangeLow = +lowandhigh[0];
      this._rangeHigh = +lowandhigh[1];
    } else {
      this._inBetween = '';
    }
  }

  public nextTaskId: Guid;

  public evaluate(value: number): boolean {
    if (this._inBetween) {
      return value >= this._rangeLow && value <= this._rangeHigh;
    }

    if (this._lessThan) {
      return value <= this._lessThan;
    }

    if (this._greaterThan) {
      return value >= this._greaterThan;
    }

    if (this._isEqual) {
      return value === this._isEqual;
    }
    return false;
  }

  public get nextTask(): Task | undefined {
    if (this.parentProcess) {
      return this.parentProcess.tasks.Get(this.nextTaskId);
    }
    return undefined;
  }

  public formatResult (result : number):string
  {
      if(this.formatString)
      {
          this.formatString="{0}";
      }
      return StringTools.format(this.formatString);
  }
  
  public parentProcess: Process | undefined;

  constructor() {
    this.comment = '';
    this.formatString = '';
    this._isEqual = -1;
    this._lessThan = -1;
    this._greaterThan = -1;
    this._inBetween = '';
    this._rangeLow = -1;
    this._rangeHigh = -1;
    this.nextTaskId = Guid.createEmpty();
  }
}
