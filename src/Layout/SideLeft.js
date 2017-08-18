/**
 *  create by miaoyu  2017/8/14 
 */

import React from 'react';
import style from './Layout.less';
import SideLeftMenu from './SideLeftMenu';

export default class SideLeft extends React.Component{
    render() {
        return(
            <div className = "SideLeft">
                <div className = {style.title}>
                    <p className = {style.titleText}>MINER_UI</p>
                </div>
                <div className = {style.menu}>
                    <SideLeftMenu/>
                </div>
            </div>
        )
    }
 }
