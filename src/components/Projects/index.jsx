import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Projects = (props) => {
  const data = useContext(ResumeContext);
  const { projects } = useContext(ResumeContext);
  const { title, work } = projects;
  return <Section title={title} list={work} />;
};

export default Projects;
