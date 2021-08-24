import React from 'react';

import './index.scss';

const SectionList = ({ title, date, awarder, summary }) => {
  return (
    <div className="section-list">
      <div className="section-list__info">
        <div>
          <div className="section-list__title">{title}</div>
          <div className="section-list__awarder">{awarder}</div>
        </div>
        <div className="section-list__date">{date}</div>
        <div className="">{summary}</div>
      </div>
    </div>
  );
};

export default SectionList;
