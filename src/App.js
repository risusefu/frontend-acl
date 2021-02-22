import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Content from './global/content';
import AppHeader from './components/appHeader/appHeader';
import AppFooter from './components/appFooter/appFooter';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        const {children} = this.props;
        return (
            <div className="App mt-5">

                <div className='container'>
                    <Content body={children}/>
                </div>

            </div>
        );
    }
}

export default App;
