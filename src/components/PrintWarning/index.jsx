import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormControlLabel from '@mui/material/FormControlLabel';

// import './index.scss';

const PrintWarning = ({ open, handleModal }) => {
  const [scroll] = React.useState('paper');
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    localStorage.setItem('showWarning', !event.target.checked);
    setChecked(event.target.checked);
  };

  const handleClose = () => {
    handleModal(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div id="layout__no-print">
      <Dialog
        maxWidth={'lg'}
        open={open}
        id="layout__no-print"
        onClose={handleModal}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Things to take care before printing
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <div
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <List>
              <ListItem className="how-it-works__text">
                <ListItemText>
                  Make sure you set <b>A4</b> size paper in print option
                </ListItemText>
              </ListItem>
              <ListItem className="how-it-works__text">
                <ListItemText>
                  Remove option <b>Print headers and footers</b> from print menu
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </DialogContent>
        <DialogActions>
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                color="primary"
                checked={checked}
                onChange={handleChange}
              />
            }
            label="Do not show me again"
            labelPlacement="end"
            color="primary"
          />
          <Button onClick={handleClose} color="primary">
            Got It!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PrintWarning;
