import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';

import { receiveJSON } from '../redux/actions';

import flatten from 'flat';
import { classExpression } from '@babel/types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  hidden: {
    display: 'none',
  },
}));

const FileUpload = () => {
  const reader = new FileReader();
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleFileUpload(e) {
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);
  }

  function onReaderLoad(e) {
    const obj = JSON.parse(e.target.result);
    const newObj = obj.map(item => {
      return flatten(item);
    });

    dispatch(receiveJSON(newObj));
  }

  function handleClick() {
    document.querySelector('#input').click();
  }

  return (
    <div>
      <input
        type="file"
        onChange={(e) => handleFileUpload(e)}
        id='input'
        className={classes.hidden}
      />
      <Button
        onClick={() => handleClick()}
        variant="outlined"
      >
        Upload
      </Button>
    </div>
  );
}

export default FileUpload;