import { TaskAction } from './TaskAction';
import { Process } from './process';
import { StringTools } from './StringTools';
import { CompletedTask } from './CompletedTask';
import { f, plainToClass, uuid,} from '@marcj/marshal';
import { TaskResultCollection } from './TaskResultCollection';


export class Task {
  
  @f.primary().uuid()
  public id: string = uuid();

  @f
  public name: string; 

  @f.enum(TaskAction)
  public action: TaskAction;

  @f
  public role: string; 

  @f
  public processStatus: string;

  @f
  public formUrl: string;
  
  @f.type(TaskResultCollection)
  public results: TaskResultCollection = new TaskResultCollection([]);

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
  public getNextTask(value: number): string  {
     return this.results.getNextTask(value);
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
    this.name = '';
    this.role = '';
    this.action = TaskAction.None;
    this.processStatus = '';
    this.formUrl = '';
    this.actionProperties = {};
    this.actionProperties['TaskActivityAssembly'] = 'AssemblyName';
    this.parentProcess = new Process();
  }
}
