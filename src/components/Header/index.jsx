import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import './index.scss';

const Header = () => {
  const { basics } = useContext(ResumeContext);
  const { name, label, image, email, phone, url, summary, location } = basics;
  return (
    <div className="header">
      <div className="header__name">{name}</div>
      <div className="header__contact">
        {email} {phone && `| ${phone}`}
      </div>
      <div className="header__contact-link">
        <a href={url}>{url}</a>
      </div>
    </div>
  );
};

export default Header;
