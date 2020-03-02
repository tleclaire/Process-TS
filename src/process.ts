
import { Guid } from "guid-typescript";
import { TaskCollection } from './TaskCollection';
import { Task } from './task';
import {IEnumerable} from 'linq-collections';
import { TaskAction } from "./TaskAction";

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
  
  
  private _tasks : TaskCollection;
  public get tasks() : TaskCollection {
    return this._tasks;
  }
  public set tasks(v : TaskCollection) {
    this._tasks = v;
  }

  public get dialogTasks():IEnumerable<Task>
  {
    return this._tasks.where(t=>t.action === TaskAction.Dialog);
  }
  
  // public dialogTasks =  () :IEnumerable<Task> => this._tasks.where(t=>t.action==TaskAction.Dialog);


  private Tasks_ItemAdded(task:Task):void  {
      task.parentProcess=this;
  }

  constructor() {
    this._name ="";
    this._currentTaskId = Guid.create();
    this._tasks = new TaskCollection();
//    this.Tasks_ItemAdded.bind(this);
    this._tasks.itemAdded = this.Tasks_ItemAdded.bind(this);

  }
}