import React from 'react';

import './index.scss';

const SectionList = ({ language, fluency }) => {
  return (
    <div className="section-list">
      <div className="section-list__info">
        <div>
          <div className="section-list__title">{language}</div>
          <div className="section-list__awarder">{fluency}</div>
        </div>
      </div>
    </div>
  );
};

export default SectionList;
