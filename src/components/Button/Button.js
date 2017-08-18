/**
 *  create by miaoyu  2017/8/16
 */

import React from 'react';

import PropertyTable from '../../libs/PropertyTable';

import Gist from '../../libs/Gist';
import SideRightCell from '../../Layout/SideRightCell';

import Example from './Example';
import Example_size from './Example_size';

export default class Button extends React.Component{

    componentDidMount() {

    }

    render() {

        const propertys = [
            {
                name: 'labelStyle',
                type: 'object',
                defaultValue: '{}',
                description: '覆盖按钮标签元素的内联样式',
            },
            {
                name: 'size',
                type: 'string',
                defaultValue: 'medium',
                description: '按钮大小可选：small medium large',
            }
        ]

        var Example_code = `
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
`

        return(
            <div>
                <SideRightCell code = {Example_code} title = "基础用法" >
                    <Example />
                </SideRightCell>
                
                <SideRightCell title = "属性" >
                    <PropertyTable propertys = { propertys }/>
                </SideRightCell>
            </div>
        )
    }
}

