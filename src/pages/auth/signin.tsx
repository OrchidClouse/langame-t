import React from 'react'
import { AuthPagesLayout } from '../../components/layout'
import styles from "../../styles/pages/SignIn.module.scss"
import { Input } from '../../components/ui'
import { PhoneIcon } from '../../components/shared/assets/svg/phone-icon'
import { PasswordIcon } from '../../components/shared/assets/svg/password-icon'
import { LogoLogin } from '../../components/shared/assets/svg/logo-login'
import { Button } from '../../components/ui'
import { Link, useNavigate } from 'react-router-dom'
import Appstore from '../../components/shared/assets/svg/appstore'
import { GooglePlay } from '../../components/shared/assets/svg/google-play'

export function SignIn() {
	const navigate = useNavigate()
  return (
	<AuthPagesLayout>
		<div className={styles.container}>
			<form>
				<div className={styles.logo}><LogoLogin /></div>
				<div className={styles.inputBlock}>
				<Input title='Номер телефона' icon={<PhoneIcon />} type='tel' placeholder='Введите номер телефона'/>
				<Input title='Пароль' icon={<PasswordIcon />} type='password' placeholder='Введите пароль'/>
				</div>
				<span className={styles.forgotPass}>Забыли пароль?</span>
				<Button onClick={() => navigate("/profile")} size="default" title='ВОЙТИ'/>
				<div className={styles.noAccount}>
					<span>Если у вас еще нет аккаунта?</span>
					<Link to="/signup">Зарегистрируйтесь</Link>
				</div>
				<div className={styles.stores}>
					<span>Установите приложение.</span>
					<div>
					<Appstore />
					<GooglePlay />
					</div>
				</div>
			</form>
		</div>
	</AuthPagesLayout>
  )
}
