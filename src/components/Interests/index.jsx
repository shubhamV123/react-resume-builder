import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from '../Sections/componentSections';

const Interests = (props) => {
  const data = useContext(ResumeContext);
  const { interests } = useContext(ResumeContext);

  return <Section list={interests} sectionName="Interests" />;
};

export default Interests;
