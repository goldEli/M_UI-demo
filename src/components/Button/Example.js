import React from 'react';

import { Button } from 'component-lib';

const style = {
    "marginRight": "20px"
}

export default class Example extends React.Component{
    render() {

        return (
            <div>
                <Button style = {style} size = "small"/>
                <Button style = {style} size = "medium" />
                <Button style = {style} size = "large" />
            </div>
        )
    }
}