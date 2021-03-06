import React from "react";

import { useDispatch } from 'react-redux';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { redactExplanations } from "../constants";
import { addExplanation } from '../redux/actions';

type ExplanationMenuProps = {
  field: string,
  hasExplanation: boolean,
  dataIndex: string,
  anchorEl: any,
  setAnchorEl: Function,
  explanation: string,
  setExplanation: Function
}

const ExplanationMenu = ({
  field,
  hasExplanation,
  dataIndex,
  anchorEl,
  setAnchorEl,
  explanation,
  setExplanation
}: ExplanationMenuProps) => {

  function handleMenuClose(explanation: string) {
    setExplanation(explanation);
    setAnchorEl(null);
    // dispatch(addExplanation(dataIndex, field, explanation));
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
    </div>
  );
};

export default ExplanationMenu;