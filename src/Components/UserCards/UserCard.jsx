import React from 'react'
import { Link } from 'react-router-dom';
import './UserCard.css'
import { LinkOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons';

function truncateURL(url, maxLength = 30) {
  if (!url || typeof url !== "string") return ""; // Prevent errors by returning an empty string if URL is undefined/null

  try {
    const urlObj = new URL(url);
    const domain = urlObj.origin;
    const path = urlObj.pathname;

    if (domain.length + 3 >= maxLength) return domain;

    const remainingLength = maxLength - domain.length - 3;
    return domain + (path.length > remainingLength ? path.substring(0, remainingLength) + "..." : path);
  } catch (error) {
    return url.length > maxLength ? url.substring(0, maxLength) + "..." : url; // Fallback for invalid URLs
  }
}



const UserCard = ({name, role, portfolioLink, socialHandle, image, link}) => {
  return (
    <>
      <Link
        to={link}
        className="user-card-holder flex flex-justify-between"
        style={{
          borderLeft: `${
            role === "cold"
              ? "6px solid var(--blue-color)"
              : role === "warm"
              ? "6px solid var(--orange-color)"
              : "6px solid var(--green-color)"
          }`,

        }}
      >
        <ul className='flex flex-column flex-justify-between'>
            <li style={{fontStyle: 'bold' }}><UserOutlined/> {name}</li>
            <li><LinkOutlined /> {truncateURL(portfolioLink,30)}</li>
            <li><TwitterOutlined/> {socialHandle}</li>
        </ul>
        <img src={image} alt={name?.charAt(0).toupperCase} style={{borderRadius: '50%', height: '5.5rem', width:'5.5rem', objectFit: 'cover'}} />
      </Link>
    </>
  );
}

export default UserCard;