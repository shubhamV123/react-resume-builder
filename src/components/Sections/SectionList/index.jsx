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
  institution,
  studyType,
  area,
  score,
  courses,
  title,
  date,
  awarder,
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

  const _courses = courses?.map((data, index) => {
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
            <div className="section-list__name">
              {name || entity || organization}
            </div>
            <div className="section-list__name">{type}</div>
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
  } else if (sectionName == 'Languages' || sectionName == 'References') {
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
  } else if (sectionName == 'Education') {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__university">{institution}</div>
            <div className="section-list__studyType">
              {studyType} degree in {area}
            </div>
            <div className="">Score: {score}</div>
          </div>
          <div className="section-list__date">
            {startDate}-{endDate}
          </div>
        </div>
        <ul className="section-list__ul">{_courses}</ul>
      </div>
    );
  } else if (sectionName == 'Awards') {
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
  } else if (sectionName == 'Interests') {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__university">{name}</div>
          </div>
        </div>
        <ul className="section-list__ul">{_keywords}</ul>
      </div>
    );
  }
};

export default SectionList;
