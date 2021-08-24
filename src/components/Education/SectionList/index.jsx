import React from 'react';

import './index.scss';

const SectionList = ({
  institution,
  studyType,
  area,
  url,
  score,
  startDate,
  endDate,
  courses,
}) => {
  const sectionTemplate = courses.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  return (
    <div className="section-list">
      <div className="section-list__info">
        <div>
          <div className="section-list__university">{institution}</div>
          <div className="section-list__studyType">
            {studyType} degree in {area}
          </div>
        </div>
        <div className="section-list__date">
          {startDate}-{endDate}
        </div>
      </div>
      <ul className="section-list__ul">{sectionTemplate}</ul>
    </div>
  );
};

export default SectionList;
