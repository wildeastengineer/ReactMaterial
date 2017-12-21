import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router
} from 'react-router-dom'


import Layout from './layout/layout';

ReactDOM.render(
    (
        <Router>
            <Layout/>
        </Router>
    ),
    document.getElementById('root')
);
