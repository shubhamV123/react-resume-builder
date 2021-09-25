import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import './index.scss';

const Summary = () => {
  const { basics } = useContext(ResumeContext);
  const { summary } = basics;
  return (
    <div className="summary section">
      <div>
        <div className="section__title">Summary</div>
        <div className="summary__content">{summary}</div>
      </div>
    </div>
  );
};

export default Summary;
