import { Guid } from 'guid-typescript';
import { TaskAction } from './TaskAction';
import { Process } from './process';
import { TaskResult } from './TaskResult';
import { List } from 'linq-collections';
import { CompletedTask } from './CompletedTask';
export declare class Task {
    id: Guid;
    name: string;
    action: TaskAction;
    role: string;
    processStatus: string;
    formUrl: string;
    results: List<TaskResult>;
    actionProperties: PropertyCollection;
    taskAktivityAssembly(): string;
    get taskAktivity(): string;
    parentProcess: Process;
    get fontStyle(): string;
    get enabled(): boolean;
    getNextTask(value: number): Guid;
    get asCompletedTask(): CompletedTask;
    constructor();
}
