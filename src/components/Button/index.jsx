import React from "react";
import styles from "./style.module.css";

function Button() {
    return (
        <button type="button" className={styles.button}>
            Generate
            <svg
                className={styles.button_icon}
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
            </svg>
        </button>
    )
}

export default Button;