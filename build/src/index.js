"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = require("./task");
var process_1 = require("./process");
var TaskAction_1 = require("./TaskAction");
console.log('Try npm run check/fix!');
doSomeStuff();
var longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
var trailing = 'Semicolon';
var why = 'am I tabbed?';
function doSomeStuff() {
    var process = new process_1.Process();
    process.name = "Prozess 1";
    var task = new task_1.Task();
    task.action = TaskAction_1.TaskAction.Dialog;
    var i = process.tasks.push(task);
    var tasks = process.dialogTasks;
    console.log(tasks.elementAt(0).id);
    tasks.forEach(function (element) {
        console.log(element.id);
    });
    return true;
}
exports.doSomeStuff = doSomeStuff;
// TODO: more examples
//# sourceMappingURL=index.js.map