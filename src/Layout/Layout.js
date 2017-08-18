/**
 *  create by miaoyu  2017/08/14
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { Button, Label } from 'component-lib';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import FlatButton from 'material-ui/FlatButton';
// import ActionAndroid from 'material-ui/svg-icons/action/android';
// import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
// import TextField from 'material-ui/TextField';
// import { withStyles, createStyleSheet } from 'material-ui/styles';

import color from '../styles/color';
import SideLeft from './SideLeft';
import SideRight from './SIdeRight';

import '../assets/stylesheets/base.less';


// import injectTapEventPlugin from 'react-tap-event-plugin';

// injectTapEventPlugin();

const styles = {
  box: {
    "width": "100%", 
    "overflow": "hidden", 
    "display": "flex", 
    "height":"100%", 
    "flexDirection": "row",
  },
  left: {
    "width": "300px", 
    "height": "100%",
    "overflow": "hidden", 
    "backgroundColor": color.blue2,
    "boxShadow": "2px 1px 5px grey",
    "zIndex": "99",
  },
  right: {
    "width": "100%", 
    "overflow": "hidden", 
    "flex": "1"
  }

};



class Layout extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <MuiThemeProvider>
        <div style = {styles.box}>
            <div style = {styles.left}>
                <SideLeft/>
            </div>
            <div style = {styles.right}>

                <SideRight/>
            </div> 
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout.propTypes = {
  name: PropTypes.string,
};

export default Layout;
