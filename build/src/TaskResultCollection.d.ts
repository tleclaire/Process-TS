import { TaskResult } from './TaskResult';
export declare class TaskResultCollection {
    private readonly tasks;
    count(): number;
    last(): TaskResult;
    getNextTask(value: number): string;
    remove(task: TaskResult): void;
    push(task: TaskResult): number;
    constructor(tasks: TaskResult[]);
}
