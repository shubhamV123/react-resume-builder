import React from 'react';

import SectionList from '../SectionList';

import './index.scss';

const Section = ({ list }) => {
  return (
    <div className="section">
      <div className="section__title">Work Experiencce</div>

      {list.map((data, index) => (
        <SectionList key={'section-list-' + index} {...data} />
      ))}
    </div>
  );
};

export default Section;
