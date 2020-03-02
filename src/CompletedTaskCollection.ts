import { CompletedTask } from './CompletedTask';
import {List} from 'linq-collections'
import { Guid } from 'guid-typescript';

export class CompletedTaskCollection extends List<CompletedTask>
{

    
    public Get(key : Guid):CompletedTask{
       return this.where(a=>a.id.equals(key)).firstOrDefault() as CompletedTask;   
    }
    constructor()
    {
        super()
    }
}