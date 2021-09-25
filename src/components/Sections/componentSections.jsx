import React from 'react';

import SectionList from './SectionList';

import './index.scss';

const Section = ({ list, sectionName }) => {
  const ListStyle = ["Languages","References"];
  const listMap = list.map((data, index) => (
    <SectionList
      sectionName={sectionName}
      key={'section-list-' + sectionName}
      {...data}
    />
  ));
  const ActiveTag = ListStyle.includes(sectionName)?<ul className="section-list__ul">{listMap}</ul>:listMap;
  if(list?.length===0) return null;
  return (
    <div className="section">
      <div className="section__title">{sectionName}</div>
      {ActiveTag}
      
    </div>
  );
};

export default Section;
