import React from 'react';
import styles from './Header.module.css';

const header = props => (
    <header className={styles.header}>
        <span className={styles.text}>Locations</span>
        <button className='btn btn-primary add-btn' onClick={props.onAddLocClick}>
            + Add Location
        </button>
    </header>
);

export default header;