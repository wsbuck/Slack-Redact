import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { updateField } from '../redux/actions';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(1),
    width: '100%',
  },
  subTextField: {
    margin: theme.spacing(1),
    marginLeft: 'auto',
    width: '90%',
  },
}));

const EditCard = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fileName = useSelector(state => state.editJSON.name);

  function handleChange(key, value) {
    dispatch(updateField(key, value));
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {fileName}
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          {
            Object.keys(data).map((key, index) => (
              <TextField
                key={index}
                label={key}
                value={data[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                // disabled
                multiline
                variant="outlined"
                className={
                  key.match(/\./)
                  ? classes.subTextField
                  : classes.textField
                }
              />
            ))
          }
        </form>
      </CardContent>
    </Card>
  );
}

export default EditCard;