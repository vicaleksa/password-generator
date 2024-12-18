import React from 'react';
import styles from './style.module.css';

function Checkbox({
    text,
    name,
    checked,
    onChange,
}) {
    return (
        <label className={styles.checkbox_container} htmlFor={name}>
            <input
                className={styles.checkbox_input}
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <span className={styles.checkbox_label}>{text}</span>
        </label>
    );
}

export default Checkbox;
