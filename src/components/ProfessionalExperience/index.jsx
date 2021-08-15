import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Section';

const ProfessionalExperience = (props) => {
  const data = useContext(ResumeContext);
  const { professionalexperience } = useContext(ResumeContext);
  const { title, work } = professionalexperience;
  return <Section title={title} list={work} />;
};

export default ProfessionalExperience;
