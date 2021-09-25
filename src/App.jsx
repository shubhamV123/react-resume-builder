import React, { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

import AceEditor from 'react-ace'
import ace from 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-terminal'

ace.config.setModuleUrl(
  'ace/mode/json_worker',
  'https://cdn.jsdelivr.net/npm/ace-builds@1.4.8/src-noconflict/worker-json.js'
)

import INTIAL_DATA from './data/resume-details-dev.json'
const ResumeContext = React.createContext(JSON.stringify(INTIAL_DATA, null, 2))

//hooks

import useResponsiveMedia from './hooks/responsiveMedia'

//components
import Resume from './components/Resume'
import Navbar from './components/Navbar'
import HowItWorks from './components/HowItWorks'
import PrintWarning from './components/PrintWarning'
import ErrorBoundary from './components/ErrorBoundary'
import PreviewTabs from './components/PreviewTabs'
import './App.scss'

//TODO: move this function to utils
const testJSON = (text) => {
  if (typeof text !== 'string') {
    return false
  }
  try {
    JSON.parse(text)
    return true
  } catch (error) {
    return false
  }
}

function App() {
  //TODO: if any other state increase move it to reducer
  const [value, setValue] = useState(JSON.stringify(INTIAL_DATA, null, 2))
  const [modal, setModal] = useState(false)
  const [showPrintWarning, setPrintWarning] = useState(false)
  const [index, setActiveIndex] = useState(0)

  const isMobile = useResponsiveMedia()

  const showPrintIconMobile = index !== 0

  useEffect(() => {
    localStorage.setItem('showWarning', true)
  }, [])

  const onChange = (newValue) => {
    if (testJSON(newValue)) {
      setValue(newValue)
    }
  }
  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const checkPrintWarning = () => {
    if (localStorage.getItem('showWarning') === 'false') {
      printResume()
    } else {
      setPrintWarning(true)
    }
  }

  const printResume = () => {
    setPrintWarning(false)
    window.print()
  }

  const AceEditorComponent = (
    <AceEditor
      placeholder="Placeholder Text"
      mode="json"
      theme="terminal"
      name="layout__no-print"
      defaultValue={value}
      debounceChangePeriod={3}
      onChange={onChange}
      style={{ flex: '1', height: isMobile ? '100vh' : 'auto', width: 'auto' }}
      fontSize={16}
      showPrintMargin={false}
      showGutter={true}
      wrapEnabled={true}
      highlightActiveLine={true}
      setOptions={{
        showLineNumbers: true,
        tabSize: 4
      }}
    />
  )

  const ResumeComponent = (
    <ErrorBoundary>
      <Resume id="resume-print" />
    </ErrorBoundary>
  )

  const handleActiveIndex = (index) => {
    setActiveIndex(index)
  }

  return (
    <ThemeProvider theme={theme}>
      <ResumeContext.Provider value={JSON.parse(value)}>
        <Navbar
          handleModal={openModal}
          printResume={checkPrintWarning}
          showPrintIcon={!isMobile ? true : showPrintIconMobile}
        />
        {isMobile ? (
          <PreviewTabs
            editor={AceEditorComponent}
            preview={ResumeComponent}
            setActiveIndex={handleActiveIndex}
          />
        ) : (
          <div className="layout">
            {AceEditorComponent}
            {ResumeComponent}
          </div>
        )}

        <PrintWarning open={showPrintWarning} handleModal={printResume} />
        <HowItWorks open={modal} handleModal={closeModal} />
      </ResumeContext.Provider>
    </ThemeProvider>
  )
}
export { ResumeContext }

export default App
