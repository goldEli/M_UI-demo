/**
 *  create by miaoyu  2017/8/16
 */

import React from 'react';
import style from './Layout.less';

import SideRightCell from './SideRightCell';

import Button from '../components/Button/Button';


export default class SideRight extends React.Component{

    setHeight = () => {
        return (document.body.clientHeight - 80) + 'px';
    }

    render() {
        return(
            <div className = "SideRight">
                <div className = {style.title}>
                    <p className = {style.titleText}>Button</p>
                </div>
                <div style = {{height: this.setHeight()}} className = {style.showArea}>
                    <h2 style = {{"lineHeight" : "60px", "paddingLeft": "30px"}}>Example</h2>

                    <Button/>

                </div>
            </div>
        )
    }
 }
