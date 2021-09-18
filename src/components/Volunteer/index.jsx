import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Volunteer = (props) => {
  const data = useContext(ResumeContext);
  const { volunteer } = useContext(ResumeContext);
  return <Section list={volunteer} sectionName="Volunteer Work" />;
};

export default Volunteer;
