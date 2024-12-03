import React from "react";
import styles from "./style.module.css";
import iconCheck from "/src/images/icon-check.svg";

function Checkbox({ text, name, checked, handleChange }) {
    return (
        <label className={styles.checkbox_container} htmlFor={name}>
            <input
                className={styles.checkbox_input}
                type="checkbox"
                name={name}
                checked={checked}
                onChange={handleChange}
            />
            <span className={styles.checkbox_label}>{text}</span>
        </label>
    )
}

export default Checkbox;