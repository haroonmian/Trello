import apis from "../../endpoints";
import { ActionConstent} from "../../constants/store";
import { GroupType, TaskType } from "../../interfaces";

export const setAppLoader = (loading: Boolean) => ({ type: ActionConstent.SET_LOADER, payload: loading })

export const setGroups =  () => {
    let groups =  apis.groups.get();
    return { type: ActionConstent.SET_GROUPS, payload: groups }
}

export const setGroup =  (payload: GroupType) => {
    let group =  apis.groups.add(payload);    
    return { type: ActionConstent.SET_GROUP, payload: group }
}

export const setStatuses =  () => {
    let statuses =  apis.options.getStatuses();
    return { type: ActionConstent.SET_STATUSES, payload: statuses }
}

export const setTasks = () => {
    let tasks = apis.tasks.get();
    return { type: ActionConstent.SET_TASKS, payload: tasks }
}

export const setTask = (payload: TaskType) => {
    let task = apis.tasks.add(payload);
    return { type: ActionConstent.SET_TASK, payload: task }
}

export const updateTask = (payload: TaskType) => {
    let task = apis.tasks.update(payload);        
    return { type: ActionConstent.UPDATE_TASK, payload: task }
}

export const removeTask = (payload: TaskType) => {
    let task = apis.tasks.delete(payload);
    return { type: ActionConstent.REMOVE_TASK, payload: task }
}

export const updateTaskOnDrag = (payload: TaskType) => {
    let task = apis.tasks.update(payload);        
    return { type: ActionConstent.UPDATE_TASK_ON_DRAG, payload: task }
}