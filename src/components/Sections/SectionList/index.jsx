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
  position,
  summary,
}) => {
  const _highlights = highlights?.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  const _keywords = keywords?.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  const _roles = roles?.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  return (
    <div className="section-list">
      <div className="section-list__info">
        <div>
          <div className="section-list__name">{name}</div>
          <div className="section-list__role">{_roles || position}</div>
        </div>
        <div className="section-list__date">
          {startDate}-{endDate}
        </div>
      </div>
      <div className="">{description || summary}</div>
      {url && <div className="">{url}</div>}
      <ul className="section-list__ul">Highlights:{_highlights}</ul>
      {_keywords && <ul className="section-list__ul">{_keywords}</ul>}
    </div>
  );
};

export default SectionList;
