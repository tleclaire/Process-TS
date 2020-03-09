import { Process } from './process';
import { Task } from './task';
export declare class TaskResult {
    comment: string;
    formatString: string;
    private _isEqual;
    get isEqual(): number;
    set isEqual(v: number);
    private _lessThan;
    get lessThan(): number;
    set lessThan(v: number);
    private _greaterThan;
    get greaterThan(): number;
    set greaterThan(v: number);
    private _inBetween;
    get inBetween(): string;
    private _rangeLow;
    private _rangeHigh;
    set inBetween(v: string);
    nextTaskId: string;
    evaluate(value: number): boolean;
    get nextTask(): Task | undefined;
    formatResult(result: number): string;
    parentProcess: Process | undefined;
    constructor();
}
