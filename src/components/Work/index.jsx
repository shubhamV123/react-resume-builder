import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Work = (props) => {
  const data = useContext(ResumeContext);
  const { work } = useContext(ResumeContext);
  return <Section list={work} />;
};

export default Work;
