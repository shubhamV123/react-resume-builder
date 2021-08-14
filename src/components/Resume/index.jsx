import React from 'react';

import Header from '../Header';
import Summary from '../Summary';
import ProfessionExperience from '../ProfessionalExperience';
import DescriptionList from '../DescriptionList';

import './index.scss';

const Resume = ({ id }) => {
  return (
    <div className="resume" id={id}>
      <Header />
      <Summary />
      <ProfessionExperience />
      <DescriptionList dataKey={'skills'} />
      <DescriptionList dataKey={'certificates'} />
      <DescriptionList dataKey={'profiles'} />
      <DescriptionList dataKey={'about'} />
    </div>
  );
};

export default Resume;
