import React from 'react';

import './index.scss';

const SectionList = ({ name, role, years, description, metaInfo }) => {
  const sectionTemplate = description.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  return (
    <div className="section-list">
      <div className="section-list__info">
        <div>
          <div className="section-list__name">{name}</div>
          <div className="section-list__role">{role}</div>
        </div>
        <div className="section-list__date">{years}</div>
      </div>
      <ul className="section-list__ul">{sectionTemplate}</ul>
      {metaInfo && <div className="section-list__meta-info">{metaInfo}</div>}
    </div>
  );
};

export default SectionList;
