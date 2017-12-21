import React, { Component } from 'react';
import {
    Redirect
} from 'react-router-dom'

require('./home-page.scss');

class HomePage extends Component {
    render() {
        return (
            <Redirect to="/buttons"/>
        );
    }
}

export default HomePage;
