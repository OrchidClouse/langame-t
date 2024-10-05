import RigthArrowIcon from '../shared/assets/svg/rigth-arrow'
import LeftArrowIcon from '../shared/assets/svg/left-arrow'
import styles from "../../styles/ui/EventCard.module.scss"

export default function EventCard({img}: {img: any}) {
  return (
	<div className={styles.container}>
		<div className={styles.btnGroup}>
			<div><LeftArrowIcon /></div>
			<div><RigthArrowIcon /></div>
		</div>
		<img src={img} alt="altimg" />
	</div>
  )
}
