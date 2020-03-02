import { Guid } from 'guid-typescript';
import { TaskAction } from './TaskAction';
import { Person } from './Person';

export class CompletedTask {

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

  private _role: string;
  public get role(): string {
    return this._role;
  }

  public set role(role: string) {
    this._role = role;
  }

  private _result: number;
  public get result(): number {
    return this._result;
  }
  public set result(v: number) {
    this._result = v;
  }

  private _formattedResult: string;
  public get formattedResult(): string {
    if (!this._formattedResult) {
      return this._result.toString();
    }
    return this._formattedResult;
  }
  public set formattedResult(v: string) {
    this._formattedResult = v;
  }

  private _taskFileId: number;
  public get taskFileId(): number {
    return this._taskFileId;
  }
  public set taskFileId(v: number) {
    this._taskFileId = v;
  }

  private _taskFileName: string;
  public get taskFileName(): string {
    return this._taskFileName;
  }

  public set taskFileName(v: string) {
    this._taskFileName = v;
  }

  
  private _comment : string;
  public get comment() : string {
      return this._comment;
  }
  public set comment(v : string) {
      this._comment = v;
  }
  
  
  private _completedBy : Person | undefined;
  public get completedBy() : Person | undefined{
      return this._completedBy;
  }
  public set completedBy(v : Person | undefined) {
      this._completedBy = v;
  }
  
  
  private _bewertungsColor : string;
  public get bewertungsColor() : string {
      return this._bewertungsColor;
  }
  public set bewertungsColor(v : string) {
      this._bewertungsColor = v;
  }

  
  public get foreColor() : string {
        return this._bewertungsColor !== "transparent" ?  "white" : "black";
  }
  
  
  private _completedDate : Date | undefined;
  public get completedDate() : Date | undefined {
      return this._completedDate;
  }
  public set completedDate(v : Date | undefined) {
      this._completedDate = v;
  }
  
  
  private _deleteUrl : string;
  public get deleteUrl() : string {
      return this._deleteUrl;
  }
  public set deleteUrl(v : string) {
      this._deleteUrl = v;
  }
  

  private _viewUrl: string;
  public get viewUrl(): string {
    return this._viewUrl;
  }

  public set viewUrl(formUrl: string) {
    this._viewUrl = formUrl;
  }

  
  private _userHtml : string;
  public get userHtml() : string {
      return this._userHtml;
  }
  public set userHtml(v : string) {
      this._userHtml = v;
  }
  
  constructor() {
    this._id = Guid.create();
    this._name = "";
    this._role = "";
    this._viewUrl = "";
    this._deleteUrl =""
    this._result = 0;
    this._formattedResult = this._result.toString();
    this._taskFileId = 0;
    this._taskFileName = "";
    this._comment="";
    this._completedBy = undefined;
    this._bewertungsColor="";
    this._userHtml="";
  }
}
