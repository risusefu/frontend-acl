import AuthService from "../services/authService";
import TaskService from "../services/taskService";

//state
const dataInitial = {
    fields: {
        id: "",
        active: true,
        description: '',
    },
    listTask: [],
    errors: {},
    isError: false
}

// types
const INITIAL_DATA = 'INITIAL_TASK_LOGIN_DATA'
const UPDATE_ELEMENT = 'UPDATE_TASK_ELEMENT'

//reducer
export default function taskReducer(state = dataInitial, action) {
    switch (action.type) {
        case INITIAL_DATA:
            return {
                ...state,
                dataInitial
            }
        case UPDATE_ELEMENT:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}
export const initialData = () => async (dispatch, {}) => {
    try {
        dispatch({
            type: INITIAL_DATA,
        });
        TaskService.getList(dispatch, UPDATE_ELEMENT);
    } catch (error) {
        console.log(error)
    }

}

export const updateState = (stateObject) => async (dispatch, {}) => {
    try {
        dispatch({
            type: UPDATE_ELEMENT,
            payload: stateObject
        })
    } catch (error) {
        console.log(error)
    }
}

export const postTask = (task) => async (dispatch,) => {
    try {
        TaskService.register(task,dispatch, UPDATE_ELEMENT);
    } catch (error) {
        console.log(error)
    }

}

export const updateTask = (id, task) => async (dispatch,) => {
    try {
        TaskService.update(id, task,dispatch, UPDATE_ELEMENT);
    } catch (error) {
        console.log(error)
    }

}
export const deleteTask = (id) => async (dispatch,) => {
    try {
        TaskService.delete(id, dispatch, UPDATE_ELEMENT);
    } catch (error) {
        console.log(error)
    }

}
