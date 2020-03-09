import { Person } from './Person';
import { f, plainToClass, uuid,} from '@marcj/marshal';

export class CompletedTask {

  @f.primary().uuid()
  public id: string = uuid();

  @f
  public name: string; 

  @f
  public role: string;

  @f
  public result: number; 
  
  @f
  public formattedResult: string;

  @f
  public taskFileId : number;
  
  @f
  public taskFileName: string ;

  @f
  public comment : string; 
  
  @f.type(Person)
  public  completedBy : Person ;
    
  @f
  public bewertungsColor : string; 
  
  @f
  public get foreColor() : string {
        return this.bewertungsColor !== "transparent" ?  "white" : "black";
  }
    
  @f.type(Date)
  public completedDate : Date = new  Date(); 
  
  
  public deleteUrl : string  

  
  public viewUrl : string;
 
  public userHtml : string; 
  
  constructor() {
    this.name = "";
    this.role = "";
    this.viewUrl = "";
    this.deleteUrl =""
    this.result = 0;
    this.formattedResult = this.result.toString();
    this.taskFileId = 0;
    this.taskFileName = "";
    this.comment="";
    this.completedBy = new Person();
    this.bewertungsColor="";
    this.userHtml="";
  }
}
