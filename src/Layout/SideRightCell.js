/**
 *  create by miaoyu  2017/8/16
 */

import React from 'react';
import style from './Layout.less';
import Gist from '../libs/Gist';
import { Card } from 'antd';


export default class SideRightCell extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    switch = () => {
        const { show } = this.state;
        this.setState({
            show: !show
        })
    }

    render() {

        const { title, children, id } = this.props,
              { show } = this.state;
              
        return(
            <div className = "SideRightCell">
                <Card 
                    title = { title ? title : ' ' }
                    extra = {<a onClick = {this.switch}>{id ? 'Code' : ''}</a>} 
                    style = {{ width: "100%" }}
                >
                    { children }
                    <div style = {{ display: show ? 'block' : 'none' }}>
                        <Gist id = { id } />
                    </div>
                </Card>
            </div>
        )
    }
 }
