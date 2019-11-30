import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    width: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },

})

const EditCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom>
          Item
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EditCard;