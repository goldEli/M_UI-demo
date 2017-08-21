/**
 *  create by miaoyu  2017/8/16
 */

import React from 'react';

import PropertyTable from '../../libs/PropertyTable';

// import Gist from '../../libs/Gist';
import SideRightCell from '../../Layout/SideRightCell';

import Example from './Example';

export default class Button extends React.Component{

    componentDidMount() {

    }

    render() {

        const propertys = [
            {
                name: 'labelStyle',
                type: 'object',
                defaultValue: '{}',
                description: '覆盖按钮标签元素的内联样式,比如想要改变按钮字体大小',
            },
            {
                name: 'size',
                type: 'string',
                defaultValue: 'medium',
                description: '按钮大小可选：small medium large',
            },
            {
                name: 'label',
                type: 'string',
                defaultValue: 'default',
                description: '按钮文字',
            },
            {
                name: 'style',
                type: 'object',
                defaultValue: '',
                description: '覆盖内联样式',
            },
            {
                name: 'onClick',
                type: 'function',
                defaultValue: '',
                description: '当按钮被点击，触发回调的函数',
            }
        ]

        var Example_code = `
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

