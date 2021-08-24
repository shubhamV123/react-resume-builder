import React from 'react';

import './index.scss';

const SectionList = ({
  name,
  description,
  keywords,
  url,
  roles,
  entity,
  type,
  startDate,
  endDate,
  highlights,
}) => {
  const projectHighlights = highlights.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  const projectKeywords = keywords.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  const projectRoles = roles.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  return (
    <div className="section-list">
      <div className="section-list__info">
        <div>
          <div className="section-list__name">{name}</div>
          <div className="section-list__role">{projectRoles}</div>
        </div>
        <div className="section-list__date">
          {startDate}-{endDate}
        </div>
      </div>
      <div className="">{description}</div>
      <div className="">{url}</div>
      <ul className="section-list__ul">Highlights:{projectHighlights}</ul>
      <ul className="section-list__ul">{projectKeywords}</ul>
    </div>
  );
};

export default SectionList;
