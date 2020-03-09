import { TaskAction } from './TaskAction';
import { Process } from './process';
import { CompletedTask } from './CompletedTask';
import { TaskResultCollection } from './TaskResultCollection';
export declare class Task {
    id: string;
    name: string;
    action: TaskAction;
    role: string;
    processStatus: string;
    formUrl: string;
    results: TaskResultCollection;
    actionProperties: PropertyCollection;
    taskAktivityAssembly(): string;
    get taskAktivity(): string;
    parentProcess: Process;
    get fontStyle(): string;
    get enabled(): boolean;
    getNextTask(value: number): string;
    get asCompletedTask(): CompletedTask;
    constructor();
}
