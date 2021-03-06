
import { TaskCollection } from './TaskCollection';
import { Task } from './task';
import {CompletedTask} from "./CompletedTask";
import { Person } from "./Person";
import { CompletedTaskCollection } from "./CompletedTaskCollection";
import { f, uuid } from "@marcj/marshal";

export class Process {

  @f
  public name : string;

  @f.uuid()
  public currentTaskId: string = uuid();
  
  @f.type(Date)
  public timeStamp : Date | undefined;
  
  @f.type(TaskCollection)
  public tasks : TaskCollection = new TaskCollection([]); 

  @f.type(CompletedTaskCollection)
  public completedTasks : CompletedTaskCollection = new CompletedTaskCollection([]); 

  public get currentTask():Task
  {
    return this.tasks.Get(this.currentTaskId);
  }
  
  @f
  public fileName : string;
  
  public get dialogTasks():Task[]
  {
    return this.tasks.dialogTasks;
  }
  


  private Tasks_ItemAdded(task:Task):void  {
      task.parentProcess=this;
  }

  public completeCurrentTask(result:number,taskId : number, taskFileName : string, comment : string, accountId:string, accountName:string, bewertungsColor:string, email:string):void
  {
    if (this.currentTaskId !== "")
    {
        let nextTask = "";

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
      return this.completedTasks.getCompletdTaskByBewertungsId(bewertungsId) as CompletedTask;
  }
  
  public getCompletdTaskByTaskFileName(taskFileName : string):CompletedTask
  {
      return this.completedTasks.getCompletdTaskByTaskFileName(taskFileName) as CompletedTask;
  }

  constructor() {
    this.name ="";
    this.fileName="";
    this.currentTaskId = uuid();
    this.tasks.itemAdded = this.Tasks_ItemAdded.bind(this);
  }
}