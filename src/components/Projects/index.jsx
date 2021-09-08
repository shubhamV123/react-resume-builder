import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Projects = (props) => {
  const data = useContext(ResumeContext);
  const { projects } = useContext(ResumeContext);

  return <Section list={projects} name="Projects" />;
};

export default Projects;
