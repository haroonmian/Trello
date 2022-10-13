import { InitialStateType, ActionType } from "interfaces";
import { ActionConstent } from "../../constants/store"
import initialState from "../../store/states"

const reducer = (state: InitialStateType, actions: ActionType) => {
    switch (actions.type) {
        case ActionConstent.RESET_STATE:
            return {
                ...initialState
            }
        case ActionConstent.SET_TASKS:
            return {
                ...state,
                tasks: actions.payload
            }
        case ActionConstent.SET_TASK:
            initialState.tasks = state.tasks && state.tasks.length ? initialState.tasks = [...state.tasks, actions.payload] : [actions.payload];         
            return {
                ...state,
                tasks: initialState.tasks
            }
        case ActionConstent.REMOVE_TASK:
            initialState.tasks = state.tasks.filter(task => task.id !== actions.payload.id);  
            return {
                ...state,
                tasks:initialState.tasks
            }
        case ActionConstent.UPDATE_TASK:
            initialState.tasks = [...state.tasks];
            var taskIndex: number = state.tasks.findIndex(task => task.id === actions.payload.id);
            initialState.tasks[taskIndex] = actions.payload
            return {
                ...state,
                tasks: initialState.tasks
            }
        case ActionConstent.SET_STATUSES:
            return {
                ...state,
                statuses: actions.payload
            }
        case ActionConstent.SET_GROUPS:
            return {
                ...state,
                groups: actions.payload
            }
        case ActionConstent.SET_GROUP:
            initialState.groups = state.groups && state.groups.length ? initialState.groups = [...state.groups, actions.payload] : [actions.payload];         
            return {
                ...state,
                groups: initialState.groups
            }
        case ActionConstent.REMOVE_GROUP:
            initialState.groups = state.groups.filter(group => group.id !== actions.payload.id);
            return {
                ...state,
                groups: initialState.groups
            }
        case ActionConstent.UPDATE_GROUP:
            initialState.groups = [...state.groups];
            var groupIndex: number = state.groups.findIndex(group => group.id === actions.payload.id);
            initialState.groups[groupIndex] = actions.payload
            return {
                ...state,
                groups: initialState.groups
            }
        case ActionConstent.SET_LOADER:
            return {
                ...state,
                apploader: actions.payload
            }
        default:
            return state
    }
}

export default reducer