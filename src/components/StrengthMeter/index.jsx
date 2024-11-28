import React from "react";
import styles from "./style.module.css";
console.log(styles)

function StrengthMeter() {
    return (
        <div className={styles.strengthMeter_container}>
            <span className={styles.strengthMeter_label}>Strength</span>
            <div className={styles.passwordStrength}>
                Weak
                <div className={styles.passwordStrength_visual}>
                    <div className={`${styles.passwordStrength_visual_block} ${styles.weak}`}></div>
                    <div className={`${styles.passwordStrength_visual_block} ${styles.weak}`}></div>
                    <div className={styles.passwordStrength_visual_block}></div>
                    <div className={styles.passwordStrength_visual_block}></div>
                </div>
            </div>
        </div>
    )
}

export default StrengthMeter;