import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import './index.scss';

const Header = () => {
  const { personal } = useContext(ResumeContext);
  const { name, email, mobile, website } = personal;
  return (
    <div className="header">
      <div className="header__name">{name}</div>
      <div className="header__contact">
        {email} | {mobile}
      </div>
      <div className="header__contact-link">
        <a href={website}>{website}</a>
      </div>
    </div>
  );
};

export default Header;
