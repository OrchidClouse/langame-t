import React, { forwardRef, useState, useEffect } from 'react';
import styles from "../../styles/ui/Input.module.scss";
import Mark from './mark';

interface IInputProps {
  type?: string;
  placeholder?: string;
  icon?: any;
  isDisabled?: boolean;
  title?: string;
  name?: boolean;
  errorMessage?: string;
}

export const Input = forwardRef(({ type = 'text', placeholder, icon, isDisabled, title, name, errorMessage }: IInputProps, ref: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');
  const [mark, setMark] = useState<boolean | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const validateFields = () => {
    if (!value) return;
    const splittedForName = value.split(" ");
    const splitted = value.split("");

    if (name && splittedForName.length === 3) {
      setMark(true);
    } else if (type === "tel" && splitted.length >= 10) {
      setMark(true);
    } else if (type === "password" && splitted.length >= 6) {
      setMark(true);
    } else {
      setMark(false);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const inputType = type === 'password' ? (isVisible ? 'text' : 'password') : type;

  const controller = type === 'password' && value && (
    <button
      className={styles.showBtn}
      disabled={isDisabled}
      type='button'
      onClick={toggleVisibility}
    >
      {isVisible ? 'Скрыть' : 'Показать'}
    </button>
  );

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
    }
    return phoneNumber;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (inputValue.length <= 11) {
      setValue(inputValue);
    }
  };

  const displayValue = type === 'tel' ? formatPhoneNumber(value) : value;

  useEffect(() => {
    if (type === 'tel' && isFocused && value === '') {
      setValue('7');
    }
  }, [isFocused, type, value]);

  return (
    <div className={`${styles.container} ${mark === true && value && styles.success} ${mark === false && value && styles.error}`}>
      {icon || (type === 'password')}
      {value && <span className={styles.title}>{title}</span>}
      <input
        placeholder={placeholder}
        className={styles.defaultInput}
        type={inputType}
        disabled={isDisabled}
        value={displayValue}
        ref={ref}
        onChange={(e) => {
          if (type === 'tel') {
            handlePhoneChange(e);
          } else {
            setValue(e.target.value);
          }
          validateFields();
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false)
        }}
      />
      {controller}
      <div className={styles.mark}>{value && <Mark success={mark} />}</div>
      <div className={styles.errorMessage}>{mark === false && value && errorMessage}</div>
    </div>
  );
});
