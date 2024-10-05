import React from 'react';
import styles from '../../styles/ui/StatusBlock.module.scss';

const StatusBlock = () => {
  return (
    <div className={styles.statusBlock}>
      <div className={styles.statusInfo}>
        <p className={styles.statusTitle}>Текущий статус:</p>
        <p className={styles.statusValue}>STANDART</p>
      </div>
      <div className={styles.timeInfo}>
        <p className={styles.timeTitle}>До смены статуса осталось:</p>
        <p className={styles.timeValue}>10 часов 23 минуты</p>
      </div>
    </div>
  );
};

export default StatusBlock;
