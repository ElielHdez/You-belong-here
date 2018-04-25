import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {TabsExampleSwipeable} from './components/TabsExampleSwipeable'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const BasicExample = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <TabsExampleSwipeable/>
  </MuiThemeProvider>
)
export default BasicExample             