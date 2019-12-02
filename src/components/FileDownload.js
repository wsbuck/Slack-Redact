import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import flatten from 'flat';

import Button from '@material-ui/core/Button';

const FileDownload = () => {
  const dataObj = useSelector(state => state.editJSON.data);
  const filename = useSelector(state => state.editJSON.name);
  const [dataStr, setDataStr] = useState('');

  // const dataStr = (
  //   "data:text/json;charset=utf-8," + 
  //   encodeURIComponent(JSON.stringify(dataObj))
  // );

  useEffect(() => {
    const tempObj = dataObj.map((item) => {
      return flatten.unflatten(item);
    });
    setDataStr(
      'data:text/json;charset=utf-8,' + 
      encodeURIComponent(JSON.stringify(tempObj))
    );

  }, [dataObj]);

  return (
    <Button variant="outlined" href={dataStr} download={filename}>
      Download
    </Button>
  );
}

export default FileDownload;