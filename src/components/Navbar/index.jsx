import React from 'react'
import { styled } from '@mui/material/styles'

import PrintIcon from '@mui/icons-material/Print'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'

import Help from './Help'

const Title = styled(Typography)(({ theme }) => ({
  marginRight: '16px'
}))

const TitleContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center'
}))

const HowItWorks = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  cursor: 'pointer'
}))

const GithubIcon = styled(GitHubIcon)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  cursor: 'pointer'
}))

const Navbar = ({ handleModal, printResume, showPrintIcon }) => {
  return (
    <div id="layout__no-print">
      <AppBar>
        <Toolbar>
          <TitleContainer>
            <Title variant="h6">Resume builder</Title>
            <Help />
          </TitleContainer>

          <HowItWorks variant="subtitle1" onClick={handleModal}>
            How it works?
          </HowItWorks>
          {showPrintIcon && <PrintIcon onClick={printResume} className="cp" />}
          <GithubIcon
            onClick={() =>
              window.open('https://github.com/shubhamV123/react-resume-builder')
            }
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Navbar
