/**
 *  create by miaoyu  2017/8/14 
 */

import React from 'react';
import reactDom, { render } from 'react-dom';
import Layout from './Layout/Layout';
import colors from './styles/color';

import { setTheme } from 'component-lib';

    setTheme({
        palette: {
        textColor: "#000",
        },
        button: {
            textTransform: 'none',
            backgroundColor: colors.blue2,
            color: colors.white,
        },
        appBar: {
        height: 50,
        },
    })


render(<Layout name='World' />, document.getElementById('root'));
