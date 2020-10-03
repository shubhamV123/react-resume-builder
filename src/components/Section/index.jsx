import React from 'react';

import SectionList from '../SectionList';
import DescriptionList from '../DescriptionList';

import './index.css';

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
