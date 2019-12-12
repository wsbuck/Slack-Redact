import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';

import NavigationButtons from "./NavigationButtons";
import EditCard from "./EditCard";
import FileUpload from "./FileUpload";
import FileDownload from "./FileDownload";
import ExplanationsDownload from "./ExplanationsDownload";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import Footer from "./Footer";

import "../assets/App.css";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    // maxWidth: "100%",
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(2)
  },
  fileButtons: {
    display: "flex",
    justifyContent: "space-between",
    height: 40,
    margin: 20
  },
  divider: {
    margin: theme.spacing(3),
  }
}));

function App() {
  const classes = useStyles({});
  const data = useSelector((state: any) => state.editJSON.data);
  const dataIndex = useSelector((state: any) => state.editJSON.index);
  const [dataItem, setDataItem] = useState();

  useEffect(() => {
    setDataItem(data[dataIndex]);
  }, [dataIndex, data]);

  return (
    <div className="App">
      <Paper className={classes.root}>
        <Header />
        <NavigationButtons />
        <ProgressBar />
        <Divider variant='middle' className={classes.divider} />
        {dataItem && <EditCard data={dataItem} />}
        <Divider variant='middle' className={classes.divider} />
        <div className={classes.fileButtons}>
          <FileUpload />
          <FileDownload />
          <ExplanationsDownload />
        </div>
      </Paper>
      <Footer />
    </div>
  );
}

export default App;
