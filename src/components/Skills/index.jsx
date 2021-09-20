import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Skills = (props) => {
  const data = useContext(ResumeContext);
  const { skills } = useContext(ResumeContext);

  return <Section list={skills} sectionName="Skills" />;
};

export default Skills;