import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Education.module.css';

const Education = ({education}) => (
  <div className={styles.Education}>
    
    
      
      {education.map((item) => {
        return (
          <>
        
          <div key={JSON.stringify(item)}>
          <div className="education">
            <h3>{item.name}, </h3>
            <p> {item.where}</p>
            <p> {item.date},</p>
            {/* <img src={item.src} alt={item.name} /> */}
          </div>
          </div>
          </>
        );
      })}
    </div>
  
);

// Education.propTypes = {};

// Education.defaultProps = {};

export default Education;
