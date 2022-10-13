import { ActionConstent } from "../constants/store"

export interface ActionType {
    type: ActionConstent
    payload?: any
}

export interface StatusType {
    id?: number
    value?: number
    label?: string
}

export interface GroupType {
    id?: number
    name?: string
    description?: string
}

export interface SelectMenu {
    id?: number
    value?: number
    label?: string
}

export interface TaskType {
    id?: number
    name?: string
    description?: string
    deadline?: string
    images?:string[]
    status?: number
    groupDto?: GroupType
}

export interface InitialStateType {
    tasks: TaskType[]
    groups: GroupType[]
    statuses: StatusType[]
    apploader: Boolean
}