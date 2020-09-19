import React from 'react';
import imgSrc from '../../assets/location.png';

const noLocation = props => (
    <div className='mt-10'>
        <img src={imgSrc} alt='No Location'></img>
        <h5>Kindly Add Your Locations First</h5>
        <span className='gray-text'>There is no location added right now</span>
    </div>
);
export default noLocation;