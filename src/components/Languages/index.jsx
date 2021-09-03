import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Languages = (props) => {
  const data = useContext(ResumeContext);
  const { languages } = useContext(ResumeContext);

  return <Section list={languages} />;
};

export default Languages;
