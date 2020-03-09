import { CompletedTask } from './CompletedTask';
export declare class CompletedTaskCollection {
    private readonly tasks;
    Get(key: string): CompletedTask;
    count(): number;
    last(): CompletedTask;
    remove(task: CompletedTask): void;
    push(task: CompletedTask): number;
    getCompletdTaskByBewertungsId(bewertungsId: number): CompletedTask;
    getCompletdTaskByTaskFileName(taskFileName: string): CompletedTask;
    constructor(tasks: CompletedTask[]);
}
