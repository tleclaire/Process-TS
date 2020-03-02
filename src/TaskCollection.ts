
import { Task } from './task';
import {List} from 'linq-collections'
import { Guid } from 'guid-typescript';

export class TaskCollection extends List<Task>
{

    public itemAdded: ((task: Task) => void) | undefined;
    
    public Get(key : Guid):Task{
       return this.where(a=>a.id.equals(key)).firstOrDefault() as Task;   
    }

    public push(task:Task):number
    {
        this.OnItemAdded(task);
        return super.push(task);
    }

    public OnItemAdded(task:Task):void 
    {
        if(this.itemAdded !== undefined) {
             this.itemAdded(task);
        }
    }

    
    constructor()
    {
        super()
    }
}