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
  publisher,
  releaseDate,
  level,
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
            <div className="section-list__main">
              {name || entity || organization}
            </div>
            <div className="">{type}</div>
            <div className="section-list__sub">{_roles || position}</div>
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
            <div className="section-list__main">{name || language}</div>
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
            <div className="section-list__main">{institution}</div>
            <div className="section-list__sub">
              {studyType} degree in {area}
            </div>
            <div className="">Score: {score}</div>
          </div>
          <div className="">
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
            <div className="section-list__main">{title}</div>
            <div className="section-list__sub">{awarder}</div>
          </div>
          <div className="">{date}</div>
          <div className="">{summary}</div>
        </div>
      </div>
    );
  } else if (sectionName == 'Interests') {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__main">{name}</div>
          </div>
        </div>
        <ul className="section-list__ul">{_keywords}</ul>
      </div>
    );
  } else if (sectionName == 'Publications') {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__main ">{name}</div>
            <div className="section-list__sub">{publisher}</div>
          </div>
          <div className="section-list__date">{releaseDate}</div>
          <div className="">{summary}</div>
          <div className="">{url}</div>
        </div>
      </div>
    );
  } else if (sectionName == 'Skills') {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__main">{name}</div>
            <div className="section-list__sub">{level}</div>
          </div>
        </div>
        <ul className="section-list__ul">{_keywords}</ul>
      </div>
    );
  }
};

export default SectionList;
