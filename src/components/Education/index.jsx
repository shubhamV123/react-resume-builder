import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Education = (props) => {
  const data = useContext(ResumeContext);
  const { education } = useContext(ResumeContext);

  return <Section list={education} />;
};

export default Education;
