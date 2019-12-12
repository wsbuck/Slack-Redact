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
  const dataLength = useSelector((state: any) => state.editJSON.data.length);
  const dataIndex = useSelector((state: any) => state.editJSON.index);
  const canProceed = useSelector((state: any) => state.editJSON.canProceed);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftPress, rightPress, canNext, canPrev]);

  function handlePrev() {
    if (canPrev && canProceed) {
      dispatch(decrementIndex());
    }
  }

  function handleNext() {
    if (canNext && canProceed) {
      dispatch(incrementIndex());
    }
  }


  return (
    <ButtonGroup>
      <Button 
        disabled={!canProceed || dataIndex <= 0}
        onClick={() => dispatch(decrementIndex())}
      >
        <ArrowBackIcon />
      </Button>
      <Button
        disabled={!canProceed || dataIndex >= dataLength - 1}
        onClick={() => dispatch(incrementIndex())}
      >
        <ArrowForwardIcon />
      </Button>
    </ButtonGroup>
  );
}

export default NavigationButtons;
