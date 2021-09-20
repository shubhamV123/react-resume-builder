import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Publications = (props) => {
  const data = useContext(ResumeContext);
  const { publications } = useContext(ResumeContext);

  return <Section list={publications} sectionName="Publications" />;
};

export default Publications;
