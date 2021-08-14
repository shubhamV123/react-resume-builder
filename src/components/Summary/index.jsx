import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import './index.scss';

const Summary = () => {
  const { basics } = useContext(ResumeContext);
  const { summary } = basics;
  return (
    <div className="header">
      <div>
        <h4>Summary</h4>
        {summary}
      </div>
    </div>
  );
};

export default Summary;
