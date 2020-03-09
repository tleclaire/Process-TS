import { Guid } from 'guid-typescript';
import { TaskAction } from './TaskAction';
import { Process } from './process';
import { TaskResult } from './TaskResult';
import { List } from 'linq-collections';
import { StringTools } from './StringTools';
import { CompletedTask } from './CompletedTask';

export class Task {
  public id: Guid; 

  public name: string; 

  public action: TaskAction;

  public role: string; 

  public processStatus: string;

  public formUrl: string;
  
  public results: List<TaskResult>;

  public actionProperties: PropertyCollection; 

  public taskAktivityAssembly(): string {
    return this.actionProperties['TaskActivityAssembly'];
  }

  public get taskAktivity(): string {
    return this.actionProperties['TaskActivity'];
  }

  public parentProcess: Process; 

  public get fontStyle(): string {
    if (this.id === this.parentProcess.currentTaskId) {
      return 'bold';
    }
    return 'normal';
  }

  public get enabled(): boolean {
    return (
      this.id === this.parentProcess.currentTaskId &&
      !StringTools.isNullOrEmpty(this.formUrl)
    );
  }

  //out string formattedResult fehlt noch
  public getNextTask(value: number): Guid  {
    const result : TaskResult | undefined = this.results.firstOrDefault(r=>r.evaluate(value));
    if(result)
    {
        return result.nextTaskId;
    }
    return Guid.createEmpty();
  }

  public get asCompletedTask():CompletedTask
  {
      const completedTask = new CompletedTask();
      completedTask.id = this.id;
      completedTask.name = this.name;
      completedTask.role = this.role;
      return completedTask;
  }

  constructor() {
    this.id = Guid.create();
    this.name = '';
    this.role = '';
    this.action = TaskAction.None;
    this.processStatus = '';
    this.formUrl = '';
    this.actionProperties = {};
    this.actionProperties['TaskActivityAssembly'] = 'AssemblyName';
    this.parentProcess = new Process();
    this.results = new List<TaskResult>();
  }
}
