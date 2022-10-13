import { TaskType } from "interfaces";

const tasks = {
  get: () => {
    let response = localStorage.getItem("tasks");
    return response && JSON.parse(response);
  },
  add: (task: TaskType) => {
    let response = localStorage.getItem("tasks");
    let tasks = response && JSON.parse(response);
    tasks = tasks && tasks.length ? [...tasks, task] : [task];
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return task;
  },
  update: (task: TaskType) => {
    let response = localStorage.getItem("tasks");
    let tasks = response && JSON.parse(response);
    let initialStateTasks = [...tasks];
    var taskIndex: number = tasks.findIndex((obj: TaskType) => obj.id === task.id);
    initialStateTasks[taskIndex] = task    
    localStorage.setItem("tasks", JSON.stringify(initialStateTasks));
    return task;
  },
  delete: (task: TaskType) => {
    let response = localStorage.getItem("tasks");
    let tasks = response && JSON.parse(response);
    let updateTask: number = tasks.filter((obj: any) => obj.id !== task.id);
    localStorage.setItem("tasks", JSON.stringify(updateTask));
    return task;
  },
};

export default tasks;
