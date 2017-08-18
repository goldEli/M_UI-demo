import React from 'react';

import { Button } from 'component-lib';

export default class Example extends React.Component{
    render() {

        return (
            <div>
                <Button labelStyle = {{"fontSize": "16px"}} size = "small" />
                <Button size = "medium" />
                <Button size = "large" />
            </div>
        )
    }
}