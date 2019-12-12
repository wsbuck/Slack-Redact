import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

const ExplanationsDownload = () => {
  const dataObj = useSelector((state: any) => state.editJSON.explanations);
  const canProceed = useSelector((state: any) => state.editJSON.canProceed);
  const jsonName = useSelector((state: any) => state.editJSON.name);
  const [filename, setFilename] = useState('');
  // const filename = 'Explanations.csv';
  const [dataStr, setDataStr] = useState('');

  useEffect(() => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    dataObj.forEach((rowArray: Array<any>) => {
      let row = rowArray.join(',');
      csvContent += row + '\n';
    });

    setDataStr(encodeURI(csvContent));

  }, [dataObj]);

  useEffect(() => {
    const name = jsonName.match(/^.*(?=(_REDACTED\.json))/)[0] + '_REASONS.csv';
    setFilename(name);
  }, [jsonName]);

  return (
    <Button
      color='primary'
      variant="outlined"
      href={dataStr}
      download={filename}
      disabled={!canProceed}
    >
      Download Reasons
    </Button>
  );
}

export default ExplanationsDownload;