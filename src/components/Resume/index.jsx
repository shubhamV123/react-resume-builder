import React from 'react';

import Header from '../Header';
import Summary from '../Summary';
import Work from '../Work';
import Volunteer from '../Volunteer';
import Education from '../Education';
import Publications from '../Publications';
import Skills from '../Skills';
import Projects from '../Projects';
import References from '../References';
import Interests from '../Interests';
import Languages from '../Languages';
import Awards from '../Awards';
import DescriptionList from '../DescriptionList';

import './index.scss';

const Resume = ({ id }) => {
  return (
    <div className="resume" id={id}>
      <Header />
      <Summary />
      <Work />
      <Volunteer />
      <Education />
      <Awards />
      <Publications />
      <Skills />
      <Languages />
      <Interests />
      <References />
      <Projects />

      {/* <DescriptionList dataKey={'skills'} />
      <DescriptionList dataKey={'certificates'} />
      <DescriptionList dataKey={'profiles'} />
      <DescriptionList dataKey={'about'} /> */}
    </div>
  );
};

export default Resume;
