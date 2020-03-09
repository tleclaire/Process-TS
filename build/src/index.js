"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var task_1 = require("./task");
var process_1 = require("./process");
var TaskAction_1 = require("./TaskAction");
var marshal_1 = require("@marcj/marshal");
var TaskResult_1 = require("./TaskResult");
doSomeStuff();
var longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
var trailing = 'Semicolon';
var why = 'am I tabbed?';
function doSomeStuff() {
    var process = new process_1.Process();
    process.name = "Prozess 1";
    var task = new task_1.Task();
    task.action = TaskAction_1.TaskAction.Dialog;
    task.name = "Erster Task";
    process.currentTaskId = task.id;
    var result = new TaskResult_1.TaskResult();
    result.isEqual = 10;
    result.nextTaskId = marshal_1.uuid();
    task.results.push(result);
    var i = process.tasks.push(task);
    var tasks = process.dialogTasks;
    console.log(tasks[0].id);
    tasks.forEach(function (element) {
        console.log(element.id);
    });
    process.completeCurrentTask(10, 5, "test.xml", "Mein Kommentar", "tleclair", "Thomas Leclaire", "red", "thomas@leclaire.de");
    var json = JSON.stringify(marshal_1.classToPlain(process_1.Process, process));
    var pro = marshal_1.plainToClass(process_1.Process, marshal_1.classToPlain(process_1.Process, process));
    console.log(json);
    return true;
}
exports.doSomeStuff = doSomeStuff;
// TODO: more examples
//# sourceMappingURL=index.js.map