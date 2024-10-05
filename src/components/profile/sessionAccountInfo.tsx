import React from 'react';
import styles from '../../styles/ui/SessionAccountInfo.module.scss';
import { Button } from '../ui';
import ReloadIcon from '../shared/assets/svg/reload';

const SessionAccountInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sessionInfo}>
        <p className={styles.title}>ИНФОРМАЦИЯ О ТЕКУЩЕЙ СЕССИИ</p>
        <div className={styles.infoRow}>
          <p>Осталось минут:</p>
          <p className={styles.value}>120 мин.</p>
        </div>
        <div className={styles.infoRow}>
          <p>Сессия истекает:</p>
          <p className={styles.value}>14.12.2020, 20:24</p>
        </div>
      </div>

      <div className={styles.accountInfo}>
        <p className={styles.title}>ОСНОВНОЙ СЧЕТ <button className={styles.refreshButton}><ReloadIcon /></button></p>
        
        <div className={styles.amountRow}>
          <p className={styles.amount}>15 000 ₽</p>
          <div className={styles.bonus}>
            <p className={styles.bonusPrice}>1 200 ₽</p>
            <p className={styles.bonusLabel}>Бонусный счет</p>
          </div>
          
        </div>
        <Button size='default'>ПОПОЛНИТЬ</Button>
      </div>
    </div>
  );
};

export default SessionAccountInfo;
