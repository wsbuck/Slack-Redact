import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

const FileDownload = () => {
  const dataObj = useSelector(state => state.editJSON.data);
  const filename = useSelector(state => state.editJSON.name);
  const dataStr = (
    "data:text/json;charset=utf-8," + 
    encodeURIComponent(JSON.stringify(dataObj))
  );

  return (
    <Button variant="outlined" href={dataStr} download={filename}>
      Download
    </Button>
  );
}

export default FileDownload;