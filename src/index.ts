import "reflect-metadata";
import { Task } from './task';
import { Process } from './process';
import { TaskAction } from './TaskAction';
import { classToPlain, uuid, plainToClass } from "@marcj/marshal";
import { TaskResult } from "./TaskResult";

doSomeStuff();

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff() {
  const process :Process = new Process();
  process.name="Prozess 1";

  const task : Task = new Task();
  task.action=TaskAction.Dialog;
  task.name = "Erster Task";

  process.currentTaskId = task.id;
  
  const result  : TaskResult = new TaskResult();
  result.isEqual=10;
  result.nextTaskId = uuid();
  task.results.push(result)

  const i = process.tasks.push(task);
  const tasks : Task[] = process.dialogTasks;
  console.log(tasks[0].id);
  tasks.forEach(element => {
    console.log(element.id);
  });

  process.completeCurrentTask(10,5,"test.xml","Mein Kommentar","tleclair","Thomas Leclaire","red","thomas@leclaire.de");

  const json = JSON.stringify(classToPlain(Process,process));
  const pro : Process = plainToClass(Process,classToPlain(Process,process));
  
  console.log(json)
  return true;
}
// TODO: more examples
