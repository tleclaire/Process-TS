import { Task } from './task';
import { List } from 'linq-collections';
import { Guid } from 'guid-typescript';
export declare class TaskCollection extends List<Task> {
    itemAdded: ((task: Task) => void) | undefined;
    Get(key: Guid): Task;
    push(task: Task): number;
    OnItemAdded(task: Task): void;
    constructor();
}
