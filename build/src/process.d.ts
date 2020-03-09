import { Guid } from "guid-typescript";
import { TaskCollection } from './TaskCollection';
import { Task } from './task';
import { IEnumerable } from 'linq-collections';
import { CompletedTask } from "./CompletedTask";
import { CompletedTaskCollection } from "./CompletedTaskCollection";
export declare class Process {
    name: string;
    currentTaskId: Guid;
    timeStamp: Date | undefined;
    tasks: TaskCollection;
    completedTasks: CompletedTaskCollection;
    get currentTask(): Task;
    fileName: string | undefined;
    get dialogTasks(): IEnumerable<Task>;
    private Tasks_ItemAdded;
    completeCurrentTask(result: number, taskId: number, taskFileName: string, comment: string, accountId: string, accountName: string, bewertungsColor: string, email: string): void;
    rollbackLastCompletedTask(): void;
    getCompletdTaskByBewertungsId(bewertungsId: number): CompletedTask;
    getCompletdTaskByTaskFileName(taskFileName: string): CompletedTask;
    constructor();
}
