import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import NavigationButtons from './NavigationButtons';
import EditCard from './EditCard';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';
import { makeStyles } from '@material-ui/core/styles';
import '../assets/App.css';


const useStyles = makeStyles(theme => ({
  fileButtons: {
    display: 'flex',
    justifyContent: 'center',
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
      {dataItem && (<EditCard data={dataItem} />)}
      { data && (
        <p>Index: {dataIndex}</p>
      )}
      <div className={classes.fileButtons}>
        <FileUpload />
        <FileDownload />
      </div>

    </div>
  );
}

export default App;
