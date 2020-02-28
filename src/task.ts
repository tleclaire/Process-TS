import { Guid } from 'guid-typescript';
import { TaskAction } from './TaskAction';
import {Process} from "./process";

export class Task {
  private _id: Guid;
  private _name: string;
  private _action: TaskAction;
  private _role: string;
  private _processStatus: string;

  private _formUrl: string;

  public get id(): Guid {
    return this._id;
  }

  public set id(id: Guid) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get action(): TaskAction {
    return this._action;
  }

  public set action(action: TaskAction) {
    this._action = action;
  }

  public get role(): string {
    return this._role;
  }

  public set role(role: string) {
    this._role = role;
  }

  public get processStatus(): string {
    return this._processStatus;
  }

  public set processStatus(processStatus: string) {
    this._processStatus = processStatus;
  }

  public get formUrl(): string {
    return this._formUrl;
  }

  public set formUrl(formUrl: string) {
    this._formUrl = formUrl;
  }

  
  private _actionProperties : PropertyCollection;
  public get actionProperties() : PropertyCollection {
    return this._actionProperties;
  }
  public set actionProperties(value : PropertyCollection) {
    this._actionProperties = value;
  }

  
  public get taskAktivityAssembly() : string {
    return this._actionProperties["TaskActivityAssembly"];
  }

  public get taskAktivity() : string {
    return this._actionProperties["TaskActivity"];
  }

  
  private _parentProcess : Process;
  public get parentProcess() : Process {
    return this._parentProcess;
  }
  public set parentProcess(v : Process) {
    this._parentProcess = v;
  }
  
  
  

  constructor() {
    this._id = Guid.create();
    this._name = '';
    this._role = '';
    this._action = TaskAction.None;
    this._processStatus = '';
    this._formUrl = '';
    this._actionProperties= {};
    this._actionProperties["TaskActivityAssembly"] = "AssemblyName";
    this._parentProcess = new Process();
  }
}
