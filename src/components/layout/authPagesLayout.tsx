import React from 'react';
import styles from "../../styles/layout/authPagesLayout.module.scss";
import {BgElemBottom} from "../shared/assets/svg/bg-elem-bottom";
import { BgElemTop } from '../shared/assets/svg/bg-elem-top';
import { Footer } from './footer';

export function AuthPagesLayout({children}: {children: React.ReactNode}) {
  return (
	<div className={styles.container}>
		<div className={styles.topElem}>
			<BgElemTop />
		</div>
		<div className={styles.room}>
			<h2>23</h2>
			<span>Стандарт</span>
		</div>
		<div className={styles.bottomElem}>
			<BgElemBottom />
		</div>
		{children}
		<Footer />
	</div>
  )
}
