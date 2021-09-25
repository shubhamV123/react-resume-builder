import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Awards = () => {
  const { awards } = useContext(ResumeContext);

  return <Section list={awards} sectionName="Awards" />;
};

export default Awards;
