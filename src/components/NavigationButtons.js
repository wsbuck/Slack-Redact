import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { incrementIndex, decrementIndex } from '../redux/actions';

import useKeyPress from '../hooks/useKeyPress';


const NavigationButtons = () => {
  const dispatch = useDispatch();
  const dataLength = useSelector(state => state.editJSON.data.length);
  const dataIndex = useSelector(state => state.editJSON.index);
  const [canNext, setCanNext] = useState(false);
  const [canPrev, setCanPrev] = useState(false);
  const leftPress = useKeyPress('ArrowLeft');
  const rightPress = useKeyPress('ArrowRight');


  useEffect(() => {
    setCanNext(dataIndex + 1 <= dataLength - 1);
    setCanPrev(dataIndex - 1 >= 0);
  }, [dataIndex, dataLength]);

  useEffect(() => {
    if (canNext && rightPress) {
      handleNext();
    } else if (canPrev && leftPress) {
      handlePrev();
    }
  }, [leftPress, rightPress]);

  function handlePrev() {
    if (canPrev) {
      dispatch(decrementIndex());
    }
  }

  function handleNext() {
    if (canNext) {
      dispatch(incrementIndex());
    }
  }

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
