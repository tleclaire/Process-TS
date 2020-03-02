import { CompletedTask } from './CompletedTask';
import { List } from 'linq-collections';
import { Guid } from 'guid-typescript';
export declare class CompletedTaskCollection extends List<CompletedTask> {
    Get(key: Guid): CompletedTask;
    constructor();
}
