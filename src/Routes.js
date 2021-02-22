import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import generateStore from './redux/store'

// ---
import App from './App';

// import API from './config/API';
import appLogin from "./sites/appLogin";
import AppHomework from "./sites/appHomework";
// const baseurl = API.basename;
const AppRoutes = () => {
    const store = generateStore();
    return (
        <Provider store={store}>
            <Route>
                <App>
                    <Switch>
                        <Route exact path={`/`} component={AppHomework}/>
                    </Switch>
                </App>
            </Route>
        </Provider>)
}

export default AppRoutes;
