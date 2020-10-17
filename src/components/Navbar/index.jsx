import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PrintIcon from '@material-ui/icons/Print';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

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
  github: {
    marginLeft: theme.spacing(2),
    cursor: 'pointer',
  },
}));

const Navbar = ({ handleModal, printResume, showPrintIcon }) => {
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
          {showPrintIcon && <PrintIcon onClick={printResume} className="cp" />}
          <GitHubIcon
            className={classes.github}
            onClick={() =>
              window.open('https://github.com/shubhamV123/react-resume-builder')
            }
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
