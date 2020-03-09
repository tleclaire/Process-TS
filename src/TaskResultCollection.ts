import { TaskResult } from './TaskResult';
import { f } from '@marcj/marshal';

export class TaskResultCollection {
  @(f.forwardArray(() => TaskResult).decorated())
  private readonly tasks: TaskResult[] = [];

  public count(): number {
    return this.tasks.length;
  }

  public last(): TaskResult {
    return this.tasks[this.tasks.length];
  }

  public getNextTask(value: number): string  {
    const result : TaskResult | undefined = this.tasks.find(r=>r.evaluate(value));  
    if(result)
    {
        return result.nextTaskId;
    }
    return "";
  }

  public remove(task: TaskResult) {
    const index = this.tasks.indexOf(task, 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  public push(task: TaskResult): number {
    return this.tasks.push(task);
  }

  constructor(@f.array(TaskResult).decorated() tasks: TaskResult[]) {
    this.tasks = tasks;
  }
}
