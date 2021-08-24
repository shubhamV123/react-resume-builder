import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Publications = (props) => {
  const data = useContext(ResumeContext);
  const { publications } = useContext(ResumeContext);
  const { title, work } = publications;
  return <Section title={title} list={work} />;
};

export default Publications;
