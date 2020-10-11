import React, { useContext } from 'react';

import { ResumeContext } from '@app/App';

import './index.scss';

const DescriptionList = ({ dataKey }) => {
  const data = useContext(ResumeContext);
  const { title, description } = data[dataKey];

  const sectionTemplate = description.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  return (
    <div className="description-list">
      <div className="description-list__title">{title}</div>
      <ul className="description-list__ul">{sectionTemplate}</ul>
    </div>
  );
};

export default DescriptionList;
