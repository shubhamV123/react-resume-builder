import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Languages = (props) => {
  const data = useContext(ResumeContext);
  const { languages } = useContext(ResumeContext);
  const { title, language } = languages;
  return <Section title={title} list={language} />;
};

export default Languages;
