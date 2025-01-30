import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import './UserCard.css'
import { LinkOutlined, TwitchOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons';

const {Meta} = Card; 

const UserCard = ({name, role, profileLink, socialHandle, image, link}) => {
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
            <li><LinkOutlined /> {profileLink}</li>
            <li><TwitterOutlined/> {socialHandle}</li>
        </ul>
        <img src={image} alt={name?.charAt(0).toupperCase} style={{borderRadius: '50%', height: '5.5rem', width:'5.5rem', objectFit: 'cover'}} />
      </Link>
    </>
  );
}

export default UserCard;