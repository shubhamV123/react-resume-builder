import React, { useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { styled } from '@mui/material/styles';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  useEffect(() => {}, []);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={0}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const TabContainer =  styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
    width: '100%',
}));

const StyledTabPanel =  styled(TabPanel)(({ theme }) => ({
  padding: 0,
}));

const PreviewTabs = ({ editor, preview, setActiveIndex }) => {
  // const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setActiveIndex(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <TabContainer>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Code" {...a11yProps(0)} />
          <Tab label="Preview" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <StyledTabPanel
          value={value}
          index={0}
          id="layout__no-print"
          dir={theme.direction}
        >
          {editor}
        </StyledTabPanel>
        <StyledTabPanel value={value} index={1} dir={theme.direction}>
          {preview}
        </StyledTabPanel>
      </SwipeableViews>
    </TabContainer>
  );
};

export default PreviewTabs;
