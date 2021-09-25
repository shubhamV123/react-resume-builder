import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <HelpIcon  aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
        Open Popover
      </HelpIcon>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
          cursor:"pointer",
          maxWidth:"600px"
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 2 }}>You can always delete the section which is not required in your case. It will also reduce resume content and can be shifted to single page resume</Typography>
      </Popover>
    </div>
  );
}
