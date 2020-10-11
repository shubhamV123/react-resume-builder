import React, { useState, useEffect } from 'react';

import AceEditor from 'react-ace';
import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-terminal';

ace.config.setModuleUrl(
  'ace/mode/json_worker',
  'https://cdn.jsdelivr.net/npm/ace-builds@1.4.8/src-noconflict/worker-json.js',
);

import Resume from './components/Resume';
import Navbar from './components/Navbar';
import HowItWorks from './components/HowItWorks';
import PrintWarning from './components/PrintWarning';
import ErrorBoundary from './components/ErrorBoundary';

import './App.scss';

import INTIAL_DATA from './data/resume-details-dev.json';

const ResumeContext = React.createContext(JSON.stringify(INTIAL_DATA, null, 2));

const testJSON = (text) => {
  if (typeof text !== 'string') {
    return false;
  }
  try {
    JSON.parse(text);
    return true;
  } catch (error) {
    return false;
  }
};

function App() {
  const [value, setValue] = useState(JSON.stringify(INTIAL_DATA, null, 2));
  const [modal, setModal] = useState(false);
  const [showPrintWarning, setPrintWarning] = useState(false);

  useEffect(() => {
    localStorage.setItem('showWarning', true);
  }, []);

  const onChange = (newValue) => {
    if (testJSON(newValue)) {
      setValue(newValue);
    }
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const checkPrintWarning = () => {
    if (localStorage.getItem('showWarning') === 'false') {
      printResume();
    } else {
      setPrintWarning(true);
    }
  };
  const printResume = () => {
    setPrintWarning(false);
    window.print();
  };
  return (
    <ResumeContext.Provider value={JSON.parse(value)}>
      <Navbar handleModal={openModal} printResume={checkPrintWarning} />
      <div className="layout">
        <AceEditor
          placeholder="Placeholder Text"
          mode="json"
          theme="terminal"
          name="layout__no-print"
          defaultValue={value}
          debounceChangePeriod={3}
          onChange={onChange}
          style={{ flex: '1', height: 'auto', width: 'auto' }}
          fontSize={16}
          showPrintMargin={false}
          showGutter={true}
          wrapEnabled={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 4,
          }}
        />
        <ErrorBoundary>
          <Resume />
        </ErrorBoundary>
      </div>
      <PrintWarning open={showPrintWarning} handleModal={printResume} />
      <HowItWorks open={modal} handleModal={closeModal} />
    </ResumeContext.Provider>
  );
}
export { ResumeContext };

export default App;
