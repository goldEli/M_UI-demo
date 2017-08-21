/**
 *  create by miaoyu  2017/8/17
 */


import React from 'react';

import { Button } from 'component-lib';

const style = {
    "marginRight": "20px"
}

export default class Example extends React.Component{
    render() {

        return (
            <div>
                <Button label = "SMALL" style = {style} size = "small"/>
                <Button label = "MEDIUM" style = {style} size = "medium" />
                <Button label = "LARGE" style = {style} size = "large" />
                <Button label = "DISABLED" style = {style} disabled/>
                <Button label = "CLICKME" style = {style} onClick = {(e) => {alert("hehe!")}}/>
            </div>
        )
    }
}