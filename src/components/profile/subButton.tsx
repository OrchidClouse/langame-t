import React from 'react'
import styles from "../../styles/ui/SubButton.module.scss"


export default function SubButton({icon, text, color}: {icon?: any, text?: string, color?: any}) {
  return (
	<div style={{backgroundColor: color}} className={styles.container}>
		<div className={styles.icon}>
			{icon}
		</div>
		<span>{text}</span>
	</div>
  )
}
