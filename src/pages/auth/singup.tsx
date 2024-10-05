import React, {useState} from 'react'
import { AuthPagesLayout } from '../../components/layout'
import { Button, Input, Switch } from '../../components/ui'
import { PhoneIcon } from '../../components/shared/assets/svg/phone-icon'
import { PasswordIcon } from '../../components/shared/assets/svg/password-icon'
import UserIcon from '../../components/shared/assets/svg/user'
import Passport from '../../components/shared/assets/svg/passport'
import PassportDetails from '../../components/shared/assets/svg/passport-details'
import Birthday from '../../components/shared/assets/svg/birthday'
import styles from "../../styles/pages/SignUp.module.scss"
import InfoIcon from '../../components/shared/assets/svg/info'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
	const navigate = useNavigate()
	const [checked, setChecked] = useState(true);
  return (
	<AuthPagesLayout>
		<div className={styles.container}>
		<h2>Регистрация</h2>
		<div className={styles.signupVer}>
			<Button icon={<InfoIcon />} size="default" title='Полная'/>
			<Button disabled size="light" title='Упрощенная' />
		</div>
		<div className={styles.fio}>
			<Input errorMessage='Введите имя, фамилию и отчество' name title='ФИО' icon={<UserIcon />} type='text' placeholder='ФИО'/>
		</div>
		<div className={styles.btnBlock}>
		<Input errorMessage='Поле должно содержать 11 цифр' title='Номер телефона' icon={<PhoneIcon />} type='tel' placeholder='Введите номер телефона'/>
		<Input title='Дата рождения' icon={<Birthday />} type='text' placeholder='Дата рождения'/>
		<Input title='Документ' icon={<Passport />} type='text' placeholder='Документ'/>
		<Input title='Укажите 10 цифр серия и номер' icon={<PassportDetails />} type='password' placeholder='Укажите 10 цифр серия и номер'/>
		<Input title='Укажите пароль' icon={<PasswordIcon />} type='password' placeholder='Укажите пароль'/>
		<Input title='Повторите пароль' icon={<PasswordIcon />} type='password' placeholder='Повторите пароль'/>
		</div>
		<div className={styles.switch}>
		<Switch
        isOn={checked}
        handleToggle={() => setChecked(!checked)}
        colorOne="#E7E7E7"
        colorTwo="#E7E7E7"
      /> <span>Я даю свое право на информационную рассылку</span>
		</div>
		<div className={styles.bottomBtns}>
			<Button onClick={() => navigate("/profile")} disabled={!checked} size="default" title='ЗАРЕГИСТРИРОВАТЬСЯ'/>
			<Button onClick={() => navigate("/")} size="light" title='ВЕРНУТЬСЯ НА ГЛАВНУЮ' />
		</div>
		</div>
	</AuthPagesLayout>
  )
}
