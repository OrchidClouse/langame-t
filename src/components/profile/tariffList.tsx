import React from 'react';
import styles from '../../styles/ui/TariffList.module.scss';

const TariffList = () => {
  return (
    <div className={styles.tariffContainer}>
      <h3 className={styles.title}>ТАРИФЫ, ДОСТУПНЫЕ НА ДАННОМ ПК</h3>
      <ul className={styles.tariffList}>
        <li className={styles.tariffItem}>
          <span>Часовой тариф</span>
          <span className={styles.price}>100 ₽</span>
        </li>
        <li className={styles.tariffItem}>
          <span>Пакет на 3 часа</span>
          <span className={styles.price}>270 ₽</span>
        </li>
        <li className={styles.tariffItem}>
          <span>Пакет на 5 часов</span>
          <span className={styles.price}>400 ₽</span>
        </li>
        <li className={styles.tariffItem}>
          <span>Пакет "День" (9:00 - 16:00)</span>
          <span className={styles.price}>450 ₽</span>
        </li>
        <li className={styles.tariffItem}>
          <span>Пакет "Вечер" (16:00 - 22:00)</span>
          <span className={styles.price}>450 ₽</span>
        </li>
        <li className={styles.tariffItem}>
          <span>Пакет "Сутки" 24 часа</span>
          <span className={styles.price}>1 450 ₽</span>
        </li>
      </ul>
    </div>
  );
};

export default TariffList;
