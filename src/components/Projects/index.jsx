import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Projects = (props) => {
  const data = useContext(ResumeContext);
  const { projects } = useContext(ResumeContext);

  return <Section list={projects} />;
};

export default Projects;
