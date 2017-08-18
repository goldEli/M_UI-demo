/**
 *  create by miaoyu  2017/8/16
 */

import React from 'react';
import style from './Layout.less';
import Gist from '../libs/Gist';
import { Card } from 'antd';

import brace from 'brace';
import AceEditor from 'react-ace';
 
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';


export default class SideRightCell extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    componentDidMount() {

    }

    handleEditor = () => {

        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/javascript");

    }

    switch = () => {
        const { show } = this.state;
        this.setState({
            show: !show
        })
    }

    render() {

        const { title, children, code } = this.props,
              { show } = this.state;   
        return(
            <div className = "SideRightCell">
                <Card 
                    title = { title ? title : ' ' }
                    extra = {<a onClick = {this.switch}>{code ? 'Code' : ''}</a>} 
                    style = {{ width: "100%" }}
                >
                    { children }
                    <div 
                        style = {{ 
                            display: show ? 'block' : 'none',
                            height: "300px",
                            width: "100%" 
                        }}
                    >
                        <AceEditor
                            mode = "javascript"
                            theme = "tomorrow"
                            name = "blah2"
                            fontSize={12}
                            showPrintMargin={false}
                            showGutter={false}
                            readOnly = {true}
                            highlightActiveLine={false}
                            value = { code }
                            style = {{"width": "100%", "height": "100%"}}
                        />
                    </div>
                </Card>
            </div>
        )
    }
 }
