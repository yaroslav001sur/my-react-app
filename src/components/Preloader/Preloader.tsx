import React from 'react';
import styles from './Preloader.module.css';

const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__spinner}></div>
    </div>
  );
};

export default Preloader;