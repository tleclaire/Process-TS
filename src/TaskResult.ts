import { Guid } from 'guid-typescript';
import { Process } from './process';
import { Task } from './task';
import { stringify } from 'querystring';
import { StringTools } from './StringTools';

export class TaskResult {
  private _comment: string;
  public get comment(): string {
    return this._comment;
  }
  public set comment(v: string) {
    this._comment = v;
  }

  private _formatString: string;
  public get formatString(): string {
    return this._formatString;
  }
  public set formatString(v: string) {
    this._formatString = v;
  }

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

  private _nextTaskId: Guid;
  public get nextTaskId(): Guid {
    return this._nextTaskId;
  }
  public set nextTaskId(v: Guid) {
    this._nextTaskId = v;
  }

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
    if (this._parentProcess) {
      return this._parentProcess.tasks.Get(this._nextTaskId);
    }
    return undefined;
  }

  public formatResult (result : number):string
  {
      if(this._formatString)
      {
          this._formatString="{0}";
      }
      return StringTools.format(this._formatString);
  }
  private _parentProcess: Process | undefined;
  public get parentProcess(): Process | undefined {
    return this._parentProcess;
  }
  public set parentProcess(v: Process | undefined) {
    this._parentProcess = v;
  }

  constructor() {
    this._comment = '';
    this._formatString = '';
    this._isEqual = -1;
    this._lessThan = -1;
    this._greaterThan = -1;
    this._inBetween = '';
    this._rangeLow = -1;
    this._rangeHigh = -1;
    this._nextTaskId = Guid.createEmpty();
  }
}
