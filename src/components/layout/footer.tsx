import React from 'react'
import styles from "../../styles/layout/Footer.module.scss"
import { Button } from '../ui'
import { getCurrentTime } from '../../utils/getCurrentTime'
import { LogoLogin } from '../shared/assets/svg/logo-login'
import { LgTag } from '../shared/assets/svg/tag'
import { Link } from 'react-router-dom'

export function Footer() {
	const links = ["Информация", "Вакансии", "Помощь", "Конфиденциальность", "Правила", "FAQ", "Прайс-лист"]
  return (
	<div className={styles.container}>
		<div className={styles.centerElems}>
			<div className={styles.links}>
				{links.map(el => (
					<span>{el}</span>
				))}
			</div>
			<div className={styles.logo}>
				<LgTag />
			</div>
		</div>
		<div className={styles.rightBottomElems}>
			<Button size='small' title='EN' />
			<span>{getCurrentTime()}</span>
		</div>
	</div>
  )
}
