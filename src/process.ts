
import { Guid } from "guid-typescript";
import { TaskCollection } from './TaskCollection';
import { Task } from './task';
import {IEnumerable} from 'linq-collections';
import { TaskAction } from "./TaskAction";
import {CompletedTask} from "./CompletedTask";
import { Person } from "./Person";
import { CompletedTaskCollection } from "./CompletedTaskCollection";

export class Process {

  
  private _name : string;
  public get name() : string {
    return this._name;
  }
  public set name(v : string) {
    this._name = v;
  }

  
  private _currentTaskId : Guid;
  public get currentTaskId() : Guid {
    return this._currentTaskId;
  }
  public set currentTaskId(v : Guid) {
    this._currentTaskId = v;
  }
  
  
  private _timeStamp : Date | undefined;
  public get timeStamp() : Date | undefined{
    return this._timeStamp;
  }
  public set timeStamp(v : Date | undefined) {
    this._timeStamp = v;
  }
  
  
  private _tasks : TaskCollection;
  public get tasks() : TaskCollection {
    return this._tasks;
  }
  public set tasks(v : TaskCollection) {
    this._tasks = v;
  }

  private _completedTasks : CompletedTaskCollection;
  public get completedTasks() : CompletedTaskCollection {
    return this._completedTasks;
  }
  public set completedTasks(v : CompletedTaskCollection) {
    this.completedTasks = v;
  }

  public get currentTask():Task
  {
    return this._tasks.Get(this._currentTaskId);
  }
  
   
  private _fileName : string | undefined;
  public get fileName() : string | undefined {
    return this._fileName;
   }
  public set fileName(v : string | undefined)  {
    this._fileName = v;
  }
  

  public get dialogTasks():IEnumerable<Task>
  {
    return this._tasks.where(t=>t.action === TaskAction.Dialog);
  }
  
  // public dialogTasks =  () :IEnumerable<Task> => this._tasks.where(t=>t.action==TaskAction.Dialog);


  private Tasks_ItemAdded(task:Task):void  {
      task.parentProcess=this;
  }

  public completeCurrentTask(result:number,taskId : number, taskFileName : string, comment : string, accountId:string, accountName:string, bewertungsColor:string, email:string):void
  {
    if (this._currentTaskId !== Guid.createEmpty())
    {
        let nextTask : Guid = Guid.createEmpty();

        const formattedResult = "";
        if (this._tasks.count() > 1)
        {
             nextTask = this._tasks.Get(this._currentTaskId).getNextTask(result);
        }
        const completedTask : CompletedTask  = this._tasks.Get(this._currentTaskId).asCompletedTask;

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
        this._completedTasks.push(completedTask);
        this._currentTaskId=nextTask;
    }
  }

  public rollbackLastCompletedTask() : void
  {
    if(this._completedTasks.count() > 0)
    {
        while(this._completedTasks.last().taskFileId ===-1)
        {
            this._completedTasks.remove(this._completedTasks.last());
        }
        this._currentTaskId = this._completedTasks.last().id;
        this._completedTasks.remove(this._completedTasks.last());
    }
  }

  public getCompletdTaskByBewertungsId(bewertungsId : number):CompletedTask
  {
      return this._completedTasks.firstOrDefault(c=>c.taskFileId === bewertungsId) as CompletedTask;
  }
  
  public getCompletdTaskByTaskFileName(taskFileName : string):CompletedTask
  {
      return this._completedTasks.firstOrDefault(c=>c.taskFileName === taskFileName) as CompletedTask;
  }

  constructor() {
    this._name ="";
    this._currentTaskId = Guid.create();
    this._tasks = new TaskCollection()   
    this._tasks.itemAdded = this.Tasks_ItemAdded.bind(this);
    this._completedTasks = new CompletedTaskCollection();
  }
}