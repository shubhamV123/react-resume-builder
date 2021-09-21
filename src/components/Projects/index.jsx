import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Projects = () => {
  const { projects } = useContext(ResumeContext);

  return <Section list={projects} sectionName="Projects" />;
};

export default Projects;
