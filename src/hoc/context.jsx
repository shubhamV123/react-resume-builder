import React from 'react';

import resumeData from '../data/resume-details-dev.json';

const ResumeContext = React.createContext(resumeData);

//For future use if we required more functionality its better to add hoc and handle all data from here
const withResumeData = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <ResumeContext.Provider value={resumeData}>
          <WrappedComponent {...this.props} />
        </ResumeContext.Provider>
      );
    }
  };
};
export { ResumeContext };
export default withResumeData;
