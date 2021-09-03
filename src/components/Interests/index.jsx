import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Interests = (props) => {
  const data = useContext(ResumeContext);
  const { interests } = useContext(ResumeContext);

  return <Section list={interests} />;
};

export default Interests;
