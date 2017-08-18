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

        return(
            <div>
                <SideRightCell title = "基础用法" id = "1210d94fe42a709982955882845a61dd">
                    <Example />
                </SideRightCell>
                <SideRightCell title = "文字 & 图标" id = "9b6b360fe28a9168d58e9304b67df126">

                </SideRightCell>
                <SideRightCell title = "尺寸" id = "1210d94fe42a709982955882845a61dd">
                    <Example_size />
                </SideRightCell>
                <SideRightCell title = "属性" >
                    <PropertyTable propertys = {propertys}/>
                </SideRightCell>
            </div>
        )
    }
}

