import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import './index.scss';

const Summary = () => {
  const { basics } = useContext(ResumeContext);
  const { summary } = basics;
  return (
    <div className="summary">
      <div>
        <div className="title">Summary</div>
        <div className="content">{summary}</div>
      </div>
    </div>
  );
};

export default Summary;
