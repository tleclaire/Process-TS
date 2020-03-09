import { Task } from './task';
import { List } from 'linq-collections';
import { f } from '@marcj/marshal';
import { TaskAction } from './TaskAction';

export class TaskCollection {
  
    @f.forwardArray(() => Task).decorated()
    private readonly tasks: Task[] = [];


  public itemAdded: ((task: Task) => void) | undefined;

  public Get(key: string): Task {
    return this.tasks.find(a => a.id === key) as Task;
  }

  //@f.exclude()
  public get dialogTasks(): Task[] {
    return this.tasks.filter(t => t.action === TaskAction.Dialog);
  }

  public push(task: Task): number {
    this.OnItemAdded(task);
    console.log(`new task added ${task.name}`);
    return this.tasks.push(task);
  }

  public OnItemAdded(task: Task): void {
    if (this.itemAdded !== undefined) {
      this.itemAdded(task);
    }
  }

  public count():number
  {
      return this.tasks.length;
  }

  constructor( @f.array(Task).decorated() tasks :Task[] ) {
      tasks.map(t=>this.push(t));//damit OnItemAdded getriggert wird;
      //this.tasks = tasks;
}

}
