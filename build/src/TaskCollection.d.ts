import { Task } from './task';
export declare class TaskCollection {
    private readonly tasks;
    itemAdded: ((task: Task) => void) | undefined;
    Get(key: string): Task;
    get dialogTasks(): Task[];
    push(task: Task): number;
    OnItemAdded(task: Task): void;
    count(): number;
    constructor(tasks: Task[]);
}
