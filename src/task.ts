import { Guid } from "guid-typescript";

class Task {
  private _id: Guid;
  private _name: string;
  private _action: TaskAction;
  public _role : string;
  
  
  public get Action() : TaskAction {
      return this._action;
  }
  
  
  public get Name() : string {
      return this._name;
  }
  

  public get Id() : Guid {
      return this._id;
  }
  
  public get Role() : string 
  {
      return this._role;
  }
  

  constructor() {

  }
}

enum TaskAction {
  Dialog,
  Notification,
  Execute,
  None,
}
