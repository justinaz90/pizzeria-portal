import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Tables Booking New</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Tables Booking ID</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>Tables Events New</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Tables Events ID</Link>
  </div>
);

export default Tables;
