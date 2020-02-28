import { Task } from './task';
import { Process } from './process';
import { TaskAction } from './TaskAction';
import { TaskCollection } from './TaskCollection';
import { IEnumerable } from 'linq-collections';
console.log('Try npm run check/fix!');
doSomeStuff();

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff() {
  let process :Process = new Process();
  process.name="Prozess 1";

  let task : Task = new Task();
  task.action=TaskAction.Dialog;
  let i = process.tasks.push(task);
  let tasks : IEnumerable<Task> = process.dialogTasks;
  console.log(tasks.elementAt(0).id);
  tasks.forEach(element => {
    console.log(element.id);
  });
  return true;
}
// TODO: more examples
