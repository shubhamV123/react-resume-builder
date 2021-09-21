import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Languages = () => {
  const { languages } = useContext(ResumeContext);

  return <Section list={languages} sectionName="Languages" />;
};

export default Languages;
