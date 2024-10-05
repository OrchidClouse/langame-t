import React from 'react'
import styles from "../../styles/ui/Button.module.scss"

export function Button({children, title, onClick, size, icon, disabled}: Partial<{disabled: boolean, children: React.ReactNode, title: string, onClick: () => void, size: "small" | "default" | "light", icon?: any}>) {
	if(!size) return
  return (
	<button disabled={disabled} onClick={onClick} className={`${styles.defaultButton} ${styles?.[size]}`}>
		{title || children}
		{icon && 		<div className={styles.icon}>
			{icon}
		</div>}
	</button>
  )
}
