import React from 'react'

import { format } from 'date-fns'

import './index.scss'

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
  level
}) => {
  const isDatesEqual =
    new Date(endDate).toDateString() === new Date().toDateString()
  const injectHTML = (content, key) => {
    return content?.map((data, index) => {
      return (
        <li
          key={`${key}_${index}`}
          dangerouslySetInnerHTML={{ __html: data }}
        ></li>
      )
    })
  }
  const _highlights = injectHTML(highlights, '_highlights')
  const _keywords = keywords && `${keywords.join(', ')}`
  const _roles = roles && `${roles.join(', ')}`
  const _courses = injectHTML(courses, '_courses')

  const sectionHighlightsAllowed = [
    'Work Experience',
    'Volunteer Work',
    'Projects'
  ]
  if (sectionHighlightsAllowed.includes(sectionName)) {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__main">
              {name || entity || organization}
            </div>
            {/* <div>{type}</div> */}
            <div className="section-list__sub">{_roles || position}</div>
          </div>
          <div className="section-list__date">
            {format(new Date(startDate), 'MMM YYY')}-
            {isDatesEqual ? 'Present' : format(new Date(endDate), 'MMM YYY')}
          </div>
        </div>
        <div>{description || summary}</div>

        <ul className="section-list__ul">
          {_highlights}
          {keywords?.length > 0 && (
            <li dangerouslySetInnerHTML={{ __html: _keywords }} />
          )}
        </ul>
      </div>
    )
  } else if (sectionName == 'Languages' || sectionName == 'References') {
    return (
      <li>
        {name || language}: {reference || fluency}
      </li>
    )
  } else if (sectionName == 'Education') {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__main">{institution}</div>
            <div className="section-list__sub">
              {studyType} degree in {area}
            </div>
            <div className="section-list__sub-2">Score: {score}</div>
          </div>
          <div>
            {format(new Date(startDate), 'MMM YYY')}-
            {isDatesEqual ? 'Present' : format(new Date(endDate), 'MMM YYY')}
          </div>
        </div>
        <ul className="section-list__ul">{_courses}</ul>
      </div>
    )
  } else if (sectionName == 'Awards') {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__main">{title}</div>
            <div className="section-list__sub">{awarder}</div>
          </div>
          {format(new Date(date), 'MMM YYY')}
        </div>
        <div className="section-list__footer">{summary}</div>
      </div>
    )
  } else if (sectionName == 'Interests') {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__main">{name}</div>
          </div>
        </div>
        <ul className="section-list__ul">
          {' '}
          <li dangerouslySetInnerHTML={{ __html: _keywords }} />
        </ul>
      </div>
    )
  } else if (sectionName == 'Publications') {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__main ">{name}</div>
            <div className="section-list__sub">{publisher}</div>
          </div>
          <div className="section-list__date">
            {format(new Date(releaseDate), 'MMM YYY')}
          </div>
        </div>
        <div className="section-list__footer">
          <div className="section-list__footer-desc">{summary}</div>
          <div>
            Publication Url:{' '}
            <a href={url} target="_blank">
              {url}
            </a>
          </div>
        </div>
      </div>
    )
  } else if (sectionName == 'Skills') {
    return (
      <div className="section-list">
        <div className="section-list__info">
          <div>
            <div className="section-list__main">{name}</div>
            <div className="section-list__sub">{level}</div>
          </div>
        </div>
        <ul className="section-list__ul">
          {' '}
          <li dangerouslySetInnerHTML={{ __html: _keywords }} />
        </ul>
      </div>
    )
  }
}

export default SectionList
