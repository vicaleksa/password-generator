import React from "react";
import styles from "./style.module.css";

function StrengthMeter({ passwordComplexity }) {
    let complexityStyle;
    const arr = [false, false, false, false];
    if (passwordComplexity === "Too weak!") {
        complexityStyle = styles.tooWeak;
        arr[0] = true;
    }
    if (passwordComplexity === "Weak") {
        complexityStyle = styles.weak;
        arr[0] = true;
        arr[1] = true;
    }
    if (passwordComplexity === "Medium") {
        complexityStyle = styles.medium;
        arr[0] = true;
        arr[1] = true;
        arr[2] = true;
    }
    if (passwordComplexity === "Strong") {
        complexityStyle = styles.strong;
        arr[0] = true;
        arr[1] = true;
        arr[2] = true;
        arr[3] = true;
    }

    return (
        <div className={styles.strengthMeter_container}>
            <span className={styles.strengthMeter_label}>Strength</span>
            <div className={styles.passwordStrength}>
                {passwordComplexity}
                <div className={styles.passwordStrength_visual}>
                    <div className={`${styles.passwordStrength_visual_block} ${arr[0] ? complexityStyle : ""}`}></div>
                    <div className={`${styles.passwordStrength_visual_block} ${arr[1] ? complexityStyle : ""}`}></div>
                    <div className={`${styles.passwordStrength_visual_block} ${arr[2] ? complexityStyle : ""}`}></div>
                    <div className={`${styles.passwordStrength_visual_block} ${arr[3] ? complexityStyle : ""}`}></div>
                </div>
            </div>
        </div>
    )
}

export default StrengthMeter;