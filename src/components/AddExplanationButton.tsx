import React, { useState } from "react";

import { useDispatch } from 'react-redux';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import { redactExplanations } from "../constants";
import { addExplanation } from '../redux/actions';

type AddExplanationButtonProps = {
  field: string,
  hasExplanation: boolean,
  needsExplanation: boolean,
  dataIndex: number,
};

const AddExplanationButton = ({
  field,
  hasExplanation,
  needsExplanation,
  dataIndex,
}: AddExplanationButtonProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  function handleMenuClose(explanation: string) {
    setAnchorEl(null);
    dispatch(addExplanation(dataIndex, field, explanation));
  }

  function handleClickToOpen(event: any) {
    setAnchorEl(event.currentTarget);
  }

  return (
    <div>
      <Menu
        id={`explanation-${field}`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {redactExplanations.map((explanation, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuClose(explanation)}
          >
            {explanation}
          </MenuItem>
        ))}
      </Menu>
      <Tooltip title="Add redact explanation">
        <IconButton
          onClick={(e) => handleClickToOpen(e)}
          color={(
            needsExplanation
            ? 'secondary'
            : hasExplanation 
              ? 'primary'
              : undefined
          )}
        >
          <CommentIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default AddExplanationButton;