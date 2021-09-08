import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Work = (props) => {
  const data = useContext(ResumeContext);
  const { work } = useContext(ResumeContext);
  return <Section list={work} name="Work Experience" />;
};

export default Work;
