import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';

import { receiveJSON, updateFileName } from '../redux/actions';

import flatten from 'flat';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  hidden: {
    display: 'none',
  },
  button: {
    width: 200,
  },
}));

const FileUpload = () => {
  const reader = new FileReader();
  const dispatch = useDispatch();
  const classes = useStyles({});

  function handleFileUpload(e: any) {
    reader.onload = onReaderLoad;
    const oldName = e.target.files[0].name;
    const newName = oldName.match(/^.*(?=(\.json))/)[0] + '_REDACTED.json';
    dispatch(updateFileName(newName));
    reader.readAsText(e.target.files[0]);
  }

  function onReaderLoad(e: any) {
    const obj = JSON.parse(e.target.result);
    const newObj = obj.map((item: any) => {
      return flatten(item);
    });
    dispatch(receiveJSON(newObj));
  }

  // function handleClick() {
  //   const uploadInput: HTMLElement = document.querySelector('#input');
  //   if (uploadInput) {
  //     uploadInput.click();
  //   }
  // }

  return (
    <>
      <Button
        // onClick={() => handleClick()}
        variant="outlined"
        color='primary'
        component='label'
      >
        Upload JSON
        <input
          type="file"
          accept=".json"
          onChange={(e) => handleFileUpload(e)}
          id='input'
          className={classes.hidden}
        />
      </Button>
    </>
  );
}

export default FileUpload;