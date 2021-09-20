import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Education = (props) => {
  const data = useContext(ResumeContext);
  const { education } = useContext(ResumeContext);

  return <Section list={education} sectionName="Education" />;
};

export default Education;
