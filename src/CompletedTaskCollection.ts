import { CompletedTask } from './CompletedTask';
import { f } from '@marcj/marshal';

export class CompletedTaskCollection {
  @(f.forwardArray(() => CompletedTask).decorated())
  private readonly tasks: CompletedTask[] = [];

  public Get(key: string): CompletedTask {
    return this.tasks.find(a => a.id === key) as CompletedTask;
  }

  public count(): number {
    return this.tasks.length;
  }

  public last(): CompletedTask {
    return this.tasks[this.tasks.length];
  }

  public remove(task: CompletedTask) {
    const index = this.tasks.indexOf(task, 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  public push(task: CompletedTask): number {
    return this.tasks.push(task);
  }


  public getCompletdTaskByBewertungsId(bewertungsId : number):CompletedTask
  {
      return this.tasks.find(c=>c.taskFileId === bewertungsId) as CompletedTask;
  }

  public getCompletdTaskByTaskFileName(taskFileName : string):CompletedTask
  {
      return this.tasks.find(c=>c.taskFileName === taskFileName) as CompletedTask;
  }

  constructor(@f.array(CompletedTask).decorated() tasks: CompletedTask[]) {
    this.tasks = tasks;
  }
}
