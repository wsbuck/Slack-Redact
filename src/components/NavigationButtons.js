import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { incrementIndex, decrementIndex } from '../redux/actions';


const NavigationButtons = () => {
  const dispatch = useDispatch();
  const dataLength = useSelector(state => state.editJSON.data.length);
  const dataIndex = useSelector(state => state.editJSON.index);

  return (
    <ButtonGroup>
      <Button 
        disabled={dataIndex <= 0}
        onClick={() => dispatch(decrementIndex())}
      >
        <ArrowBackIcon />
      </Button>
      <Button
        disabled={dataIndex >= dataLength - 1}
        onClick={() => dispatch(incrementIndex())}

      >
        <ArrowForwardIcon />
      </Button>
    </ButtonGroup>
  );
}

export default NavigationButtons;