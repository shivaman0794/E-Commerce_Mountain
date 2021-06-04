import React from 'react';
import './Menu-item.styles.scss';

const MenuItem = ({imageUrl,size,title}) => (

    <div className={`${size} menu-item`}>

        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />

        <div className='content'>

            <div className='title'>{title.toUpperCase()}</div>

            <span className='subtitle'>SHOP NOW</span>

        </div>
    </div>
);

export default MenuItem;