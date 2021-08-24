import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const References = (props) => {
  const data = useContext(ResumeContext);
  const { references } = useContext(ResumeContext);
  const { title, reference } = references;
  return <Section title={title} list={reference} />;
};

export default References;
