import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const HowItWorks = ({ open, handleModal }) => {
  const [scroll, setScroll] = React.useState('paper');

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
    <div>
      <Dialog
        maxWidth={'lg'}
        open={open}
        onClose={handleModal}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">How it works</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <div
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <List>
              <ListItem className="how-it-works__text">
                <ListItemText>
                  <b>PREREQUISITE:</b> If you want to use advance of this tool.
                  Then knowlege of basic <b>JSON,</b> basic<b> HTML</b>{' '}
                  required. Otherwise you can always create you resume based on
                  this default template
                </ListItemText>
              </ListItem>
              <ListItem className="how-it-works__text">
                <ListItemText>
                  <b>JSON BASED:</b> This resume based on <b>JSON</b> format.
                  You just need to change values in json object. Right side will
                  automatically updated. you
                </ListItemText>
              </ListItem>
              <ListItem className="how-it-works__text">
                <ListItemText>
                  Once you are done updating your json value. You can reflected
                  changes on right hand side. To download either you can use
                  these key bindings: :{' '}
                  <ul>
                    <li>
                      <b>Windows & Linux: Ctrl + p</b>
                    </li>
                    <li>
                      <b>Mac: ⌘ + p</b>{' '}
                    </li>
                  </ul>
                  or click on <b>printer icon</b> on top right corner save pdf
                  name
                </ListItemText>
              </ListItem>
              <ListItem className="how-it-works__text">
                <ListItemText>
                  If you want to make any word or text as html
                  functionality(like bold,strong). Then you can also pass it
                  with html tags. See json example for context
                </ListItemText>
              </ListItem>
              <ListItem className="how-it-works__text">
                {' '}
                <ListItemText>
                  Currently this project has limited scope. Like limited field,
                  no customization of colors. I have plan in future to update
                  it. Till then you can only use these predefined json
                  structure(i.e you can only change value{' '}
                  <b>Do not change keys</b>)
                </ListItemText>
              </ListItem>

              <ListItem className="how-it-works__text">
                <ListItemText>
                  <b>Things to take care:</b> Since this project is in early
                  version. While you are printing this page make sure you
                  selected paper size as: <b>A4</b> and you removed{' '}
                  <b>removed Print headers and footers</b> from your print
                  option.
                </ListItemText>
              </ListItem>
            </List>
            <Typography variant="subtitle1">
              <b>Note:</b> This resume web app is strictly follow{' '}
              <strong>single page resume application</strong>. If you are
              looking for more than 1 page resume. Then this tool might not for
              you
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Got It!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HowItWorks;
