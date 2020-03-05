import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Column from '../Column/Column'
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

function App() {
  const classes = useStyles();
  const [errorMsg, setErrorMsg]=useState([])
  const [warningMsg, setWarningMsg]=useState([])
  const [infoMsg, setInfoMsg]=useState([])

  return (
    <div className={classes.root}>
      <Column 
      errorMsg={errorMsg}
      color = '#F56236'
      />
      <Column 
      warningMsg={warningMsg}
      color='#FCE788'
      />
      <Column 
      infoMsg={infoMsg}
      color=''
      />
    </div>
  );
}

export default App;
