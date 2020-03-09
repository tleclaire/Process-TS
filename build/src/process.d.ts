import { TaskCollection } from './TaskCollection';
import { Task } from './task';
import { CompletedTask } from "./CompletedTask";
import { CompletedTaskCollection } from "./CompletedTaskCollection";
export declare class Process {
    name: string;
    currentTaskId: string;
    timeStamp: Date | undefined;
    tasks: TaskCollection;
    completedTasks: CompletedTaskCollection;
    get currentTask(): Task;
    fileName: string;
    get dialogTasks(): Task[];
    private Tasks_ItemAdded;
    completeCurrentTask(result: number, taskId: number, taskFileName: string, comment: string, accountId: string, accountName: string, bewertungsColor: string, email: string): void;
    rollbackLastCompletedTask(): void;
    getCompletdTaskByBewertungsId(bewertungsId: number): CompletedTask;
    getCompletdTaskByTaskFileName(taskFileName: string): CompletedTask;
    constructor();
}
