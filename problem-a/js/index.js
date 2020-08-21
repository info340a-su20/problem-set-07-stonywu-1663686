'use strict';

/* your code goes here! */

class Task {
  constructor(description, complete) {
    this.description = description;
    this.complete = complete;
  }

  render() {
    let liElem = document.createElement("li");
    liElem.textContent = this.description;
    if(this.complete) {
      liElem.classList.add("font-strike");
    }
    liElem.addEventListener("click", () => {
      this.toggleFinished();
      liElem.classList.toggle("font-strike");
    }); 
    return liElem;
  }

  toggleFinished() {
    this.complete = !this.complete;
  }
}

class TaskList {
  constructor(taskArray) {
    this.tasks = taskArray;
  }

  addTask(desc) {
    let newTask = new Task(desc, false);
    this.tasks.push(newTask);
  }

  render() {
    let olElem = document.createElement("ol");
    this.tasks.forEach((each) => {
      let liElem = each.render();
      olElem.appendChild(liElem);
    });
    return olElem;
  }
}

class NewTaskForm {
  constructor(submitFunction) {
    this.submitCallback = submitFunction;
  }

  render() {
    let formElem = document.createElement("form");
    let inputElem = document.createElement("input");
    inputElem.classList.add("form-contral", "mb-3")
    inputElem.setAttribute("placeholder", "What else do you have to do?");
    formElem.appendChild(inputElem);
    let btnElem = document.createElement("button");
    btnElem.classList.add("btn", "btn-primary");
    btnElem.textContent = "Add task to list";
    formElem.appendChild(btnElem);
    btnElem.addEventListener("click", (event) => {
      event.preventDefault();
      let whatToDo = this.submitCallback;
      let inputValue = inputElem.value;
      whatToDo(inputValue);
    });
    return formElem;
  }
}

class App {
  constructor(NewParent, newTaskList){
    this.parentElem = NewParent;
    this.taskList = newTaskList;
  }

  render() {
    let liElem = this.taskList.render();
    this.parentElem.appendChild(liElem);

    let whoYouGonnaCall = (arg) => this.addTaskToList(arg);
    let formObj = new NewTaskForm(whoYouGonnaCall);
    this.parentElem.appendChild(formObj.render());
  }

  addTaskToList(descString) {
    this.taskList.addTask(descString);
    this.parentElem.innerHTML = "";
    this.render();
  }
}

let taskA = new Task("Make some classes", true);
let taskB = new Task("Arrow some functions", false);
let taskListObj = new TaskList([taskA, taskB])
let appElem = document.querySelector("#app");
let appObj = new App(appElem, taskListObj);
appObj.render();

//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
