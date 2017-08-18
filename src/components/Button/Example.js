import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import { Button } from 'component-lib';

export default class Example extends React.Component{
    render() {

        return (
            <div>
                <Button labelStyle = {{"fontSize": "16px"}} size = "small" />
                <Button size = "medium" />
                <Button size = "large" />
                <FlatButton label="Default" />
                <FlatButton label="Primary" primary={true} />
                <FlatButton label="Secondary" secondary={true} />
                <FlatButton label="Disabled" disabled={true} />
            </div>
        )
    }
}