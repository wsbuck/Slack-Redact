import React from 'react';
import { useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '12px',
    color: 'grey',
  }
}));

const ProgressBar = () => {
  const classes = useStyles();
  const dataIndex = useSelector(state => state.editJSON.index);
  const dataLength = useSelector(state => state.editJSON.data.length);

  return (
    <>
    <LinearProgress
      variant="determinate"
      value={(dataIndex + 1) / dataLength * 100}
      className={classes.root}
    />
    <span className={classes.text}>({dataIndex + 1} of {dataLength})</span>
    </>
  );
}

export default ProgressBar;