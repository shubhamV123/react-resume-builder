import React, { useContext } from 'react'
import { ResumeContext } from '@app/App'

import './index.scss'

const Header = () => {
  const { basics } = useContext(ResumeContext)
  const { name, label, image, email, phone, url, location, profiles } = basics
  return (
    <div className="header">
      {image && (
        <img
          src={image}
          alt="profilePicture"
          className="header__img"
          width="70px"
          height="70px"
        />
      )}
      <div className="header__name">{name}</div>
      {label && <div className="header__job-title">{label}</div>}
      <div className="header__contact">
        {email && email} {phone && `| ${phone} `}
        {location.city && `| ${location.city} `}, {location.region}
      </div>
      <div className="header__contact-link">
        <a href={url}>{url}</a>
        {/* <a href={url}>{url}</a>
        {profiles.map((item, index) => {
          return (
            <div key={index}>
              {item.network}: {item.username} url: {item.url}
            </div>
          );
        })} */}
      </div>
    </div>
  )
}

export default Header
