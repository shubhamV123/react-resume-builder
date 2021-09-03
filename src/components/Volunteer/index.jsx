import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Volunteer = (props) => {
  const data = useContext(ResumeContext);
  const { volunteer } = useContext(ResumeContext);
  return <Section list={volunteer} />;
};

export default Volunteer;
