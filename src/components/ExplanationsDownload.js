import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

const ExplanationsDownload = () => {
  const dataObj = useSelector(state => state.editJSON.explanations);
  const filename = 'Explanations.csv';
  const [dataStr, setDataStr] = useState('');

  useEffect(() => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    dataObj.forEach((rowArray) => {
      let row = rowArray.join(',');
      csvContent += row + '\n';
    });

    setDataStr(encodeURI(csvContent));

  }, [dataObj]);

  return (
    <Button
      color='primary'
      variant="outlined"
      href={dataStr}
      download={filename}
    >
      Download Reasons
    </Button>
  );
}

export default ExplanationsDownload;