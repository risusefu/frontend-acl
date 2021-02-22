import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './appHomework.scss';
import {deleteTask, initialData, postTask, updateState, updateTask} from "../../redux/tacksReducer";
import ERROR from "../../config/ERROR";

const AppHomework = () => {
    const dispatch = useDispatch();
    const state = useSelector(store => store.task);

    useEffect(() => {
        dispatch(initialData());
    }, [])

    const  handleValidation = () => {
        let fields = state.fields;
        let errors = {};
        let formIsValid = true;
        const noEmptyText = ERROR.validation.empty

        //username
        if (!fields["active"]) {
            formIsValid = false;
            errors["active"] = noEmptyText;
        }

        //userPassword
        if (!fields["description"]) {
            formIsValid = false;
            errors["description"] = noEmptyText;
        }

        setState({errors: errors, isError: !formIsValid});
        return formIsValid;
    }

    const setState = (state) => {
        dispatch(updateState(state))
    }

    const submit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            if (!!state.fields.id){
                dispatch(updateTask(state.fields.id, state.fields))
            } else {
                dispatch(postTask(state.fields))
            }
        }
    }

    const handleChange = (e) => {
        let fields = state.fields;
        fields[e.target.name] = e.target.value;
        setState({fields});
        handleValidation();
    }

    const buildList = () => {

        let listHtml = [];
        if (state.listTask.length > 0){
            state.listTask.forEach((l, i) => {
                listHtml.push(buildNameLi(i, l));
            });
        }

        return listHtml;
    }

    const deleteElement = (id) => {
        dispatch(deleteTask(id))
    }

    const buildNameLi = (i, row) => {
        return <div className="list-group text-left" key={i.toString()}>
            <div className="d-flex justify-content-between bd-highlight mb-3">
                <div className="p-2 bd-highlight">{row.id}</div>
                <div className="p-2 bd-highlight">{row.description}</div>
                <div className="p-2 bd-highlight">{row.active === true ? 'is active' : 'is not active'}</div>
                <div className="p-2 bd-highlight">{row.createAt}</div>
                <div className="p-2 bd-highlight"> <button type="button" className="btn btn-danger" onClick={() => {deleteElement(row.id)}}>Eliminar</button></div>
            </div>
        </div>;
    }

    return (
        <Fragment>
            <div className={"container-fluid"}>
                <div className={"form-section"}>
                    <div className="row text-left">
                        <div className={"col-12 p-5"}>
                            <form name={"loginForm"} onSubmit={submit}>
                                <div className="form-group text-center">
                                    <small className="form-text text-muted">
                                        <h2>
                                            Task
                                        </h2>
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_ref">id</label>
                                    <input type="text" className="form-control" id="id"
                                           aria-describedby="textHelp" placeholder="id"
                                           name={"id"}
                                           onChange={handleChange} value={state.fields["id"]}
                                    />
                                    {state.errors["id"] &&
                                    <div className="alert alert-danger mt-2" role="alert">
                                        <span style={{color: "red"}}>{state.errors["id"]}</span>
                                    </div>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="user_ref">Description</label>
                                    <input type="text" className="form-control" id="description"
                                           aria-describedby="passwordHelp" placeholder="Description"
                                           name={"description"}
                                           onChange={handleChange} value={state.fields["description"]}
                                    />

                                    {state.errors["description"] &&
                                    <div className="alert alert-danger mt-2" role="alert">
                                        <span style={{color: "red"}}>{state.errors["description"]}</span>
                                    </div>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="user_ref">Is active?</label>
                                    <input type="checkbox" className="form-control" id="active"
                                           aria-describedby="passwordHelp" placeholder="Active"
                                           name={"active"}
                                           checked={true}
                                           onChange={handleChange} value={state.fields["active"]}
                                    />

                                    {state.errors["active"] &&
                                    <div className="alert alert-danger mt-2" role="alert">
                                        <span style={{color: "red"}}>{state.errors["active"]}</span>
                                    </div>}
                                </div>

                                {state.errors["axios"] &&
                                <div className="alert alert-danger mt-2" role="alert">
                                    <span style={{color: "red"}}>{state.errors["axios"]}</span>
                                </div>}

                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary"
                                            onClick={submit}>Crear o Actualizar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={"listTacks"}>
                    {buildList()}
                </div>
            </div>
        </Fragment>
    );
}

export default AppHomework;
