import { Guid } from 'guid-typescript';
import { TaskAction } from './TaskAction';
import { Process } from './process';
import { TaskResult } from './TaskResult';
import { List } from 'linq-collections';
import { StringTools } from './StringTools';
import { CompletedTask } from './CompletedTask';

export class Task {
  private _id: Guid;
  public get id(): Guid {
    return this._id;
  }

  public set id(id: Guid) {
    this._id = id;
  }

  private _name: string;
  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  private _action: TaskAction;
  public get action(): TaskAction {
    return this._action;
  }

  public set action(action: TaskAction) {
    this._action = action;
  }

  private _role: string;
  public get role(): string {
    return this._role;
  }

  public set role(role: string) {
    this._role = role;
  }

  private _processStatus: string;
  public get processStatus(): string {
    return this._processStatus;
  }

  public set processStatus(processStatus: string) {
    this._processStatus = processStatus;
  }

  private _formUrl: string;
  public get formUrl(): string {
    return this._formUrl;
  }

  public set formUrl(formUrl: string) {
    this._formUrl = formUrl;
  }

  private _results: List<TaskResult>;
  public get results(): List<TaskResult> {
    return this._results;
  }
  public set results(v: List<TaskResult>) {
    this._results = v;
  }

  private _actionProperties: PropertyCollection;
  public get actionProperties(): PropertyCollection {
    return this._actionProperties;
  }
  public set actionProperties(value: PropertyCollection) {
    this._actionProperties = value;
  }

  public get taskAktivityAssembly(): string {
    return this._actionProperties['TaskActivityAssembly'];
  }

  public get taskAktivity(): string {
    return this._actionProperties['TaskActivity'];
  }

  private _parentProcess: Process;
  public get parentProcess(): Process {
    return this._parentProcess;
  }
  public set parentProcess(v: Process) {
    this._parentProcess = v;
  }

  public get fontStyle(): string {
    if (this.id === this._parentProcess.currentTaskId) {
      return 'bold';
    }
    return 'normal';
  }

  public get enabled(): boolean {
    return (
      this._id === this._parentProcess.currentTaskId &&
      !StringTools.isNullOrEmpty(this._formUrl)
    );
  }

  //out string formattedResult fehlt noch
  public getNextTask(value: number): Guid  {
    const result : TaskResult | undefined = this._results.firstOrDefault(r=>r.evaluate(value));
    if(result)
    {
        return result.nextTaskId;
    }
    return Guid.createEmpty();
  }

  public get asCompletedTask():CompletedTask
  {
      const completedTask = new CompletedTask();
      completedTask.id = this._id;
      completedTask.name = this._name;
      completedTask.role = this._role;
      return completedTask;
  }

  constructor() {
    this._id = Guid.create();
    this._name = '';
    this._role = '';
    this._action = TaskAction.None;
    this._processStatus = '';
    this._formUrl = '';
    this._actionProperties = {};
    this._actionProperties['TaskActivityAssembly'] = 'AssemblyName';
    this._parentProcess = new Process();
    this._results = new List<TaskResult>();
  }
}
