import React, { Component } from 'react';

import {
    Route,
    Link
} from 'react-router-dom'

import {
    HomePage,
    // ---
    ButtonsPage,
    SelectsPage
} from '../pages';

require('./layout.scss');

const routes = [
    {
        path: '/',
        exact: true,
        label: 'Home',
        component: HomePage
    },
    {
        path: '/buttons',
        label: 'Buttons',
        component: ButtonsPage
    },
    {
        path: '/selects',
        label: 'Selects',
        component: SelectsPage
    }
];

class Layout extends Component {
    render() {
        return (
            <div
                className="rm-layout"
            >
                <div
                    className="rm-navigation"
                >
                    <ul>
                        {routes.map((route, index) => (
                            <li key={index}>
                                <Link to={route.path}>
                                    {route.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className="rm-body"
                >
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Layout;
