import React from 'react';

import Header from '../Header';
import ProfessionExperience from '../ProfessionalExperience';
import DescriptionList from '../DescriptionList';

import './index.css';

const Resume = (props) => {
  return (
    <div className="resume">
      <Header />
      <ProfessionExperience />
      <DescriptionList dataKey={'skills'} />
      <DescriptionList dataKey={'certificates'} />
      <DescriptionList dataKey={'profiles'} />
      <DescriptionList dataKey={'about'} />
    </div>
  );
};

export default Resume;
