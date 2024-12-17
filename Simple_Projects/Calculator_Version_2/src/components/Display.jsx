import styles from "./../styles/Display.module.css";

const Display = ({ displayValue }) => {
    return <input className={styles.display} type="text" value={displayValue} readOnly />
};

export default Display;
