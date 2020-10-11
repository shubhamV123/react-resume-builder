import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PrintIcon from '@material-ui/icons/Print';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  howItWorks: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
}));

const Navbar = ({ handleModal, printResume }) => {
  const classes = useStyles();

  return (
    <div id="layout__no-print">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Resume builder
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.howItWorks}
            onClick={handleModal}
          >
            How it works?
          </Typography>
          <PrintIcon onClick={printResume} className="cp" />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
