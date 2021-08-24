import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Education = (props) => {
  const data = useContext(ResumeContext);
  const { education } = useContext(ResumeContext);
  const { title, degree } = education;
  return <Section title={title} list={degree} />;
};

export default Education;
