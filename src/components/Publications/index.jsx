import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Publications = (props) => {
  const data = useContext(ResumeContext);
  const { publications } = useContext(ResumeContext);

  return <Section list={publications} />;
};

export default Publications;
