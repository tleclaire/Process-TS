import { Guid } from 'guid-typescript';
import { TaskAction } from './TaskAction';
import { Person } from './Person';

export class CompletedTask {

  public id: Guid; 

  public name: string; 

  public role: string;

  public result: number; 
  
  public formattedResult: string;

  public taskFileId : number;
  
  public taskFileName: string ;

  public comment : string; 
  
  public  completedBy : Person | undefined;
    
  public bewertungsColor : string; 
  
  public get foreColor() : string {
        return this.bewertungsColor !== "transparent" ?  "white" : "black";
  }
    
  public completedDate : Date | undefined; 
  
  public deleteUrl : string 
  

  public viewUrl : string;

  
  public userHtml : string; 
  
  constructor() {
    this.id = Guid.create();
    this.name = "";
    this.role = "";
    this.viewUrl = "";
    this.deleteUrl =""
    this.result = 0;
    this.formattedResult = this.result.toString();
    this.taskFileId = 0;
    this.taskFileName = "";
    this.comment="";
    this.completedBy = undefined;
    this.bewertungsColor="";
    this.userHtml="";
  }
}
