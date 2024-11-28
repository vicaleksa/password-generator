import React from "react";
import styles from "./style.module.css";
import iconCopy from "/src/images/icon-copy.svg";

function PasswordVeiw() {
    return (
        <div className={styles.password_container}>
            <p className={styles.password}>PTx1f5DaFX</p>
            <button className={styles.btn_copy}>
                <img
                    className={styles.iconCopy}
                    src={iconCopy}
                    alt="Copy password"
                />
            </button>
        </div>
    )
}

export default PasswordVeiw;