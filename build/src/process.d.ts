import { Guid } from "guid-typescript";
import { TaskCollection } from './TaskCollection';
import { Task } from './task';
import { IEnumerable } from 'linq-collections';
export declare class Process {
    private _name;
    get name(): string;
    set name(v: string);
    private _currentTaskId;
    get currentTaskId(): Guid;
    set currentTaskId(v: Guid);
    private _tasks;
    get tasks(): TaskCollection;
    set tasks(v: TaskCollection);
    get dialogTasks(): IEnumerable<Task>;
    private Tasks_ItemAdded;
    constructor();
}
