/**
 *  create by miaoyu  2017/8/14 
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

import '../assets/stylesheets/base.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Test from './Test';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  }

};

const style = {
  marginLeft: 20,
};

// const styleSheet = createStyleSheet(theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
// }));


class App extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Test/>
        <MuiThemeProvider>
          <div>
            
            <FlatButton
              label="Choose an Image"
              labelPosition="before"
              style={styles.uploadButton}
              containerElement="label"
            >
              <input type="file" style={styles.uploadInput} />
            </FlatButton>

            <FlatButton
              label="Label before"
              labelPosition="before"
              color="accent"
              icon={<ActionAndroid />}
            />

            <Paper zDepth={2}>
              <TextField hintText="First name" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Middle name" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Last name" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Email address" style={style} underlineShow={false} />
              <Divider />
            </Paper>

          </div>




        </MuiThemeProvider>
        

        <Label size="small">Hello, {name}!</Label>
        <div>
          <Button
            bgColor="green"
            size="small"
          >
            small
          </Button>
        </div>
        <div>
          <Button
            bgColor="yellow"
            size="medium"
          >
            medium
          </Button>
        </div>
        <div>
          <Button
            bgColor="orange"
            size="large"
          >
            large
          </Button>
        </div>
        <div>
          <Button
            size="wide"
          >
            wide
          </Button>
        </div>
        <div>
          <Button
            bgColor="pink"
            size="extraWide"
          >
            extra wide
          </Button>
        </div>
        <div>
          <Button
            bgColor="purple"
            size="fullWidth"
          >
            full width
          </Button>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
