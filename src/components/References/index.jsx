import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const References = (props) => {
  const data = useContext(ResumeContext);
  const { references } = useContext(ResumeContext);

  return <Section list={references} sectionName="References" />;
};

export default References;
