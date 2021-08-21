import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Volunteer = (props) => {
  const data = useContext(ResumeContext);
  const { volunteer } = useContext(ResumeContext);
  const { title, work } = volunteer;
  return <Section title={title} list={work} />;
};

export default Volunteer;
