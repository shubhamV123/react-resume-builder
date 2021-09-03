import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const References = (props) => {
  const data = useContext(ResumeContext);
  const { references } = useContext(ResumeContext);

  return <Section list={references} />;
};

export default References;
