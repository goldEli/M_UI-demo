import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import { Button } from 'component-lib';

export default class Example_size extends React.Component{
    render() {

        return (
            <div>
                <Button size = "small" />
                <Button size = "medium" />
                <Button size = "large" />
            </div>
        )
    }
}