import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";

import { updateField, setProceed } from "../redux/actions";
import AddExplanationButton from "./AddExplanationButton";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    margin: theme.spacing(1),
    width: "100%"
  },
  subTextField: {
    margin: theme.spacing(1),
    marginLeft: "auto",
    width: "90%"
  },
  iconButton: {
    padding: 5
  },
  divider: {
    height: 20,
    margin: 4
  },
  inputRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    // width: 500,
    width: "100%"
  }
}));

const EditCard = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fileName = useSelector(state => state.editJSON.name);
  const dataIndex = useSelector(state => state.editJSON.index);
  const currentExplanations = useSelector(state => state.editJSON.explanations);
  const [disabled, setDisabled] = useState({});
  const [redacted, setRedacted] = useState({});

  function handleChange(key, value) {
    dispatch(updateField(key, value));
  }

  function handleRedact(event, key) {
    let temp = Object.assign({}, redacted, {
      [key]: true
    });
    setRedacted(temp);
    dispatch(updateField(key, "X".repeat(String(data[key]).length)));
  }

  function handleEdit(event, key) {
    let temp = Object.assign({}, disabled, {
      [key]: !disabled[key]
    });
    setDisabled(temp);
    let tempRedact = Object.assign({}, redacted, {
      [key]: true
    });
    setRedacted(tempRedact);
  }

  function checkExplanation(key, index) {
    const explanations = currentExplanations || [];
    const found = explanations.find(e => e[0] === index && e[1] === key);
    return found ? true : false;
  }

  useEffect(() => {
    const tempDisabled = {};
    const tempRedacted = {};
    Object.keys(data).forEach(key => {
      tempDisabled[key] = true;
      tempRedacted[key] = false;
    });
    setDisabled(tempDisabled);
    setRedacted(tempRedacted);
  }, [data]);

  useEffect(() => {
    const rKeys = Object.keys(redacted).filter(e => redacted[e] === true);
    const needsExplanation = rKeys.find(el => !checkExplanation(el, dataIndex));

    if (needsExplanation) {
      dispatch(setProceed(false));
    } else {
      dispatch(setProceed(true));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redacted]);

  return (
    <div>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {fileName}
      </Typography>
      <form className={classes.container} noValidate autoComplete="off">
        {Object.keys(data).map((key, index) => (
          <div className={classes.inputRoot} key={index}>
            <TextField
              label={key}
              value={data[key]}
              onChange={e => handleChange(key, e.target.value)}
              multiline
              className={classes.textField}
              inputProps={{ "aria-label": key }}
              variant="outlined"
              disabled={disabled[key]}
              error={redacted[key] && !checkExplanation(key, dataIndex)}
            />
            <Tooltip title="Redact entire field">
              <IconButton
                className={classes.iconButton}
                aria-label="redact all"
                onClick={e => handleRedact(e, key)}
              >
                <HighlightOffIcon />
              </IconButton>
            </Tooltip>
            <Divider className={classes.divider} orientation="vertical" />
            <Tooltip title="Edit">
              <IconButton
                className={classes.iconButton}
                aria-label="directions"
                onClick={e => handleEdit(e, key)}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <AddExplanationButton
              field={key}
              dataIndex={dataIndex}
              hasExplanation={checkExplanation(key, dataIndex)}
              needsExplanation={
                redacted[key] && !checkExplanation(key, dataIndex)
              }
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default EditCard;