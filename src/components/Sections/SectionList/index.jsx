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
  organization,
  sectionName,
  reference,
  language,
  fluency,
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
  if (
    sectionName == 'Work Experience' ||
    sectionName == 'Volunteer Work' ||
    sectionName == 'Projects'
  ) {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__name">{name || organization}</div>
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
  } else if (sectionName == 'Languages' || (sectionName = 'References')) {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__title">{name || language}</div>
            <div className="">{reference || fluency}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default SectionList;
