import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import './index.scss';

const Header = () => {
  const { basics } = useContext(ResumeContext);
  const { name, label, image, email, phone, url, summary, location } = basics;
  return (
    <div className="header">
      <img
        src="https://www.w3schools.com/tags/img_girl.jpg"
        alt="profilePicture"
        width="100"
        height="125"
      />
      <div className="header__name">{name}</div>
      <div className="">{label}</div>
      <div className="header__contact">
        {email} {phone && `| ${phone}`}
        {location.city && `| ${location.city}`}, {location.region}
      </div>
      <div className="header__contact-link">
        <a href={url}>{url}</a>
      </div>
    </div>
  );
};

export default Header;
