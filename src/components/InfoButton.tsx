import React, { useState } from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    textAlign: "end",
    height: 0,
    marginRight: theme.spacing(3)
  },
  title: {
    textAlign: 'center',
  },
}));

const InfoButton = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({});

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <IconButton
        color="primary"
        onClick={handleClickOpen}
      >
        <InfoIcon />
      </IconButton>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle
          className={classes.title}
        >
          Redact your JSON
        </DialogTitle>
        <DialogContent dividers>
          <ol>
            <li>
              <Typography gutterBottom>
                Click the 'UPLOAD JSON' button to upload your JSON file to the
                web application.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                Once the form loads to your json structure, click the edit or
                redact-all buttons to edit your new JSON.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                After you complete your edit, make sure to select the applicable
                explanation for the redaction. You will not be able to download
                your new files or advance to the next items until you add an
                explanation.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                The 'add explanation' button allows for the user to choose an
                explanation for the redaction that is compiled to a csv file for
                later download.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                Once all edits are done, a redacted version of your JSON is
                available for download by clicking the 'DOWNLOAD JSON' button.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                All edits are done in the browser and never sent to a server.
              </Typography>
            </li>
          </ol>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InfoButton;
