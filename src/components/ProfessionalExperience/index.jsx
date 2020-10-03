import React, { useContext } from 'react';
import { ResumeContext } from '@app/hoc/context';

import Section from '../Section';

const ProfessionalExperience = (props) => {
  const { company } = useContext(ResumeContext);
  const { title, companyList } = company;
  return <Section title={title} list={companyList} />;
};

export default ProfessionalExperience;
