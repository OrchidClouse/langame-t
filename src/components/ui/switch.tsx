import styles from "../../styles/ui/Switch.module.scss"
import ShapeIcon from "../shared/assets/svg/shape";

export const Switch = ({ isOn, handleToggle, colorOne, colorTwo }: any) => {
	return (
	  <>
		<input
		  checked={isOn}
		  onChange={handleToggle}
		  className={styles.switchCheckbox}
		  id={`switch`}
		  type="checkbox"
		/>
		<label
		  style={{ background: colorOne }}
		  className={styles.switchLabel}
		  htmlFor={`switch`}
		>
		  <div style={{ background: isOn ? "#DC0000" : colorTwo }} className={`${styles.switchButton}`}>{isOn && <ShapeIcon />}</div>
		</label>
	  </>
	);
};