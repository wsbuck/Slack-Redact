import React from 'react';

import { useDispatch } from 'react-redux';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { incrementIndex, decrementIndex } from '../redux/actions';


const NavigationButtons = () => {
  const dispatch = useDispatch();

  return (
    <ButtonGroup>
      <Button onClick={() => dispatch(decrementIndex())}>
        <ArrowBackIcon />
      </Button>
      <Button onClick={() => dispatch(incrementIndex())}>
        <ArrowForwardIcon />
      </Button>
    </ButtonGroup>
  );
}

export default NavigationButtons;