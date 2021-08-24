import React from 'react';

import './index.scss';

const SectionList = ({ name, reference }) => {
  return (
    <div className="section-list">
      <div className="section-list__info">
        <div>
          <div className="section-list__title">{name}</div>
          <div className="section-list__awarder">{reference}</div>
        </div>
      </div>
    </div>
  );
};

export default SectionList;
