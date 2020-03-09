
import { Guid } from "guid-typescript";
import { TaskCollection } from './TaskCollection';
import { Task } from './task';
import {IEnumerable} from 'linq-collections';
import { TaskAction } from "./TaskAction";
import {CompletedTask} from "./CompletedTask";
import { Person } from "./Person";
import { CompletedTaskCollection } from "./CompletedTaskCollection";

export class Process {

  public name : string;

  public currentTaskId : Guid; 
  
  public timeStamp : Date | undefined;
  
  public tasks : TaskCollection; 

  public completedTasks : CompletedTaskCollection; 

  public get currentTask():Task
  {
    return this.tasks.Get(this.currentTaskId);
  }
  
  
  public fileName : string | undefined;
  
  public get dialogTasks():IEnumerable<Task>
  {
    return this.tasks.where(t=>t.action === TaskAction.Dialog);
  }
  


  private Tasks_ItemAdded(task:Task):void  {
      task.parentProcess=this;
  }

  public completeCurrentTask(result:number,taskId : number, taskFileName : string, comment : string, accountId:string, accountName:string, bewertungsColor:string, email:string):void
  {
    if (this.currentTaskId !== Guid.createEmpty())
    {
        let nextTask : Guid = Guid.createEmpty();

        const formattedResult = "";
        if (this.tasks.count() > 1)
        {
             nextTask = this.tasks.Get(this.currentTaskId).getNextTask(result);
        }
        const completedTask : CompletedTask  = this.tasks.Get(this.currentTaskId).asCompletedTask;

        const completedBy = new Person();
        completedBy.accountId = accountId;
        completedBy.accountType = "User";
        completedBy.displayName = accountName;
        completedBy.email = email;
        completedTask.completedBy = completedBy;
        completedTask.result = result;
        completedTask.comment = comment;
        completedTask.formattedResult = formattedResult;
        completedTask.taskFileId = taskId;
        completedTask.taskFileName = taskFileName;
        completedTask.bewertungsColor = bewertungsColor;
        completedTask.completedDate = new Date();
        this.completedTasks.push(completedTask);
        this.currentTaskId=nextTask;
    }
  }

  public rollbackLastCompletedTask() : void
  {
    if(this.completedTasks.count() > 0)
    {
        while(this.completedTasks.last().taskFileId ===-1)
        {
            this.completedTasks.remove(this.completedTasks.last());
        }
        this.currentTaskId = this.completedTasks.last().id;
        this.completedTasks.remove(this.completedTasks.last());
    }
  }

  public getCompletdTaskByBewertungsId(bewertungsId : number):CompletedTask
  {
      return this.completedTasks.firstOrDefault(c=>c.taskFileId === bewertungsId) as CompletedTask;
  }
  
  public getCompletdTaskByTaskFileName(taskFileName : string):CompletedTask
  {
      return this.completedTasks.firstOrDefault(c=>c.taskFileName === taskFileName) as CompletedTask;
  }

  constructor() {
    this.name ="";
    this.currentTaskId = Guid.create();
    this.tasks = new TaskCollection()   
    this.tasks.itemAdded = this.Tasks_ItemAdded.bind(this);
    this.completedTasks = new CompletedTaskCollection();
  }
}