import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import recursosReducer from './ducksReducer.js'
import taskReducer from './tacksReducer.js'
import loginReducer from "./loginReducer";

//Aquí se pueden convinar todos los reducers de todos los archivos docks que se nengan, separados por coma
const rootReducer = combineReducers({
    recursos: recursosReducer,
    login: loginReducer,
    task: taskReducer
})

/*
   Esta sección que viene abajo, es para configurar el addon de chrome
   Está documentado en: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
   la sección 1.2
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    //const store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}
