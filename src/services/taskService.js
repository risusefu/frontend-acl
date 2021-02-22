import axios from "axios";
import API from "../config/API";
import ERROR from "../config/ERROR";

const TaskService = {

    getList: (dispatch, type) => {
        const headers = {
            'Content-Type': 'application/json',

        };
        axios.get(`${API.services.homework}`, {headers}).then(res => {
            const listTask = res.data;
            dispatch({
                type: type,
                payload: {
                    listTask,
                    isShowModal: 'true'
                }
            })
        });
    },

    register: (task, dispatch, type) => {
        const headers = {
            'Content-Type': 'application/json',
        };

        axios.post(`${API.services.homeworks}`, task, {
            headers,
        })
            .then(res => {
                TaskService.getList(dispatch, type);

            }).catch((err) => {
            let jsonDetails = {};
            if (err.response) {
                jsonDetails.error = err.response.data.errorMessage;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            } else if (err.request) {
                jsonDetails.error = ERROR.text.connection;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            } else {
                jsonDetails.error = ERROR.text.error;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            }
        });

    },

    update: (id, task, dispatch, type) => {
        const headers = {
            'Content-Type': 'application/json',
        };

        axios.put(`${API.services.homeworks}/${task.id}`, task, {
            headers,
        })
            .then(res => {
                TaskService.getList(dispatch, type);

            }).catch((err) => {
            let jsonDetails = {};
            if (err.response) {
                jsonDetails.error = err.response.data.errorMessage;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            } else if (err.request) {
                jsonDetails.error = ERROR.text.connection;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            } else {
                jsonDetails.error = ERROR.text.error;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            }
        });

    },
    delete: (id, dispatch, type) => {

        axios.delete(`${API.services.homeworks}/${id}`, {})
            .then(res => {
                TaskService.getList(dispatch, type);

            }).catch((err) => {
            let jsonDetails = {};
            if (err.response) {
                jsonDetails.error = err.response.data.errorMessage;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            } else if (err.request) {
                jsonDetails.error = ERROR.text.connection;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            } else {
                jsonDetails.error = ERROR.text.error;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            }
        });

    }
}

export default TaskService;
