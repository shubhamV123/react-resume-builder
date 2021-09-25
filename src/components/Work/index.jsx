import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Work = () => {
  const { work } = useContext(ResumeContext);
  return <Section list={work} sectionName="Work Experience" />;
};

export default Work;
