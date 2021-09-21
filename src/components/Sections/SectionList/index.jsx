import React from 'react';

import { format, formatDistance, formatRelative, subDays } from 'date-fns';

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
  const injectHTML = (content, key) => {
    return content?.map((data, index) => {
      return (
        <li
          key={`${key}_${index}`}
          dangerouslySetInnerHTML={{ __html: data }}
        ></li>
      );
    });
  };
  const _highlights = injectHTML(highlights, '_highlights');
  const _keywords = injectHTML(keywords, '_keywords');
  const _roles = injectHTML(roles, '_roles');
  const _courses = injectHTML(courses, '_courses');

  const sectionHighlightsAllowed = [
    'Work Experience',
    'Volunteer Work',
    'Projects',
  ];
  if (sectionHighlightsAllowed.includes(sectionName)) {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__main">
              {name || entity || organization}
            </div>
            <div>{type}</div>
            <div className="section-list__sub">{_roles || position}</div>
          </div>
          <div className="section-list__date">
            {format(new Date(startDate), 'MMMM, YYY')}-
            {format(new Date(endDate), 'MMMM, YYY')}
          </div>
        </div>
        <div>{description || summary}</div>
        {url && <div>{url}</div>}
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
            <div>{reference || fluency}</div>
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
            <div>Score: {score}</div>
          </div>
          <div>
            {format(new Date(startDate), 'MMMM, YYY')}-
            {format(new Date(endDate), 'MMMM, YYY')}
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
          {format(new Date(date), 'MMMM, YYY')}
          <div>{summary}</div>
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
          <div>{summary}</div>
          <div>{url}</div>
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
