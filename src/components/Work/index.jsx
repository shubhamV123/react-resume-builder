import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Work = (props) => {
  const data = useContext(ResumeContext);
  const { professionalExperience } = useContext(ResumeContext);
  const { title, work } = professionalExperience;
  return <Section title={title} list={work} />;
};

export default Work;
