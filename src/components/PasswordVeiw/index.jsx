import React from "react";
import styles from "./style.module.css";
import iconCopy from "/src/images/icon-copy.svg";

function PasswordVeiw({ password }) {
    let textClass = password ? styles.password_filled : styles.password;

    return (
        <div className={styles.password_container}>
            <p className={textClass}>{password || "P4$5W0rD!"}</p>
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