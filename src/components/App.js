import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import NavigationButtons from './NavigationButtons';
import EditCard from './EditCard';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';
import ProgressBar from './ProgressBar';

import '../assets/App.css';


const useStyles = makeStyles(theme => ({
  fileButtons: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
  },
}));


function App() {
  const classes = useStyles();
  const data = useSelector(state => state.editJSON.data);
  const dataIndex = useSelector(state => state.editJSON.index);
  const [dataItem, setDataItem] = useState();

  useEffect(() => {
    setDataItem(data[dataIndex]);
  }, [dataIndex, data]);

  return (
    <div className="App">
      <NavigationButtons />
      <ProgressBar />
      {dataItem && (<EditCard data={dataItem} />)}
      <div className={classes.fileButtons}>
        <FileUpload />
        <FileDownload />
      </div>

    </div>
  );
}

export default App;
