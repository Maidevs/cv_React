import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Tecnologias';


const Tecnologias = ({tecnologias}) => (
  <div className={styles.Tecnologias}>
    
      {tecnologias.map((item) => {
        return (
          <>
          <div> </div>
          <div key={JSON.stringify(item)}>
          <div className="cajaTech">
            <p>{item.name}</p>
            <img src={item.src} alt={item.name} />
          </div>
          </div>
          </>
        );
      })}
    </div>
  
);

// Tecnologias.propTypes = {};

// Tecnologias.defaultProps = {};

export default Tecnologias;
