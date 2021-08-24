import React from 'react';

import './index.scss';

const SectionList = ({
  name,
  position,
  url,
  startDate,
  endDate,
  summary,
  highlights,
}) => {
  const sectionTemplate = highlights.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  return (
    <div className="section-list">
      <div className="section-list__info">
        <div>
          <div className="section-list__name">{name}</div>
          <div className="section-list__role">{position}</div>
        </div>
        <div className="section-list__date">
          {startDate}-{endDate}
        </div>
      </div>
      <div className="">{summary}</div>
      <ul className="section-list__ul">{sectionTemplate}</ul>
    </div>
  );
};

export default SectionList;
