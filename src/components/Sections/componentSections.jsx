import React from 'react';

import SectionList from './SectionList';

import './index.scss';

const Section = ({ list, sectionName }) => {
  return (
    <div className="section">
      <div className="section__title">{sectionName}</div>

      {list.map((data, index) => (
        <SectionList
          sectionName={sectionName}
          key={'section-list-' + index}
          {...data}
        />
      ))}
    </div>
  );
};

export default Section;
