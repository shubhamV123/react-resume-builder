import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Skills = (props) => {
  const data = useContext(ResumeContext);
  const { skillSet } = useContext(ResumeContext);
  const { title, skills } = skillSet;
  return <Section title={title} list={skills} />;
};

export default Skills;
