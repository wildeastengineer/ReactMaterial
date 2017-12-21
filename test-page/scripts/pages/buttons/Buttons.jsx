import React, { Component } from 'react';

import {
    Button
} from 'components';

require('./buttons-page.scss');

class ButtonsPage extends Component {
    render() {
        return (
            <div
                className="rm-buttons-page"
            >
                <table>
                    <thead>
                    <tr>
                        <th>
                            State
                        </th>
                        <th>
                            Raised (default)
                        </th>
                        <th>
                            Flat
                        </th>
                        <th>
                            Floating
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            Plain
                        </td>
                        <td className='with-net'>
                            <Button>
                                Button
                            </Button>
                        </td>
                        <td className='with-net'>
                            <Button
                                type='flat'
                            >
                                Button
                            </Button>
                        </td>
                        <td className='with-net'>
                            <Button
                                type='floating'
                            >
                                Button
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Active Button
                        </td>
                        <td className='with-net'>
                            <Button
                                active={true}
                            >
                                Button
                            </Button>
                        </td>
                        <td className='with-net'>
                            <Button
                                type='flat'
                                active={true}
                            >
                                Button
                            </Button>
                        </td>
                        <td className='with-net'>
                            <Button
                                type='floating'
                                active={true}
                            >
                                Button
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Disabled Button
                        </td>
                        <td className='with-net'>
                            <Button
                                disabled={true}
                            >
                                Button
                            </Button>
                        </td>
                        <td className='with-net'>
                            <Button
                                type='flat'
                                disabled={true}
                            >
                                Button
                            </Button>
                        </td>
                        <td className='with-net'>
                            <Button
                                type='floating'
                                disabled={true}
                            >
                                Button
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ButtonsPage;
