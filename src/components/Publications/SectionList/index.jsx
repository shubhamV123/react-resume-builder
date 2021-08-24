import React from 'react';

import './index.scss';

const SectionList = ({ name, publisher, releaseDate, url, summary }) => {
  return (
    <div className="section-list">
      <div className="section-list__info">
        <div>
          <div className="section-list__title">{name}</div>
          <div className="section-list__awarder">{publisher}</div>
        </div>
        <div className="section-list__date">{releaseDate}</div>
        <div className="">{summary}</div>
        <div className="">{url}</div>
      </div>
    </div>
  );
};

export default SectionList;
