import React from 'react';

import SectionList from '../SectionList';

import './index.scss';

const Section = ({ title, list }) => {
  return (
    <div className="section">
      <div className="section__title">{title}</div>

      {list.map((data, index) => (
        <SectionList key={'section-list-' + index} {...data} />
      ))}
    </div>
  );
};

export default Section;
