import React from 'react';
import PropTypes from 'prop-types';
import s from'./Notification.module.css';


const Notification = ({ message }) => (
    
    <div>
        <p className={s.Message}>{ message}</p> 
  </div>

)

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification;