import React from "react";
import styles from "./style.module.css";

function Slider() {
    return (
        <div className={styles.slider_container}>
            <div className={styles.label}>
                <label htmlFor="length">Character Length</label>
                <span className={styles.length}>10</span>
            </div>
            <input className={styles.range_input}
                type="range"
                id="length"
                name="length"
                min={4}
                max={20}
                step={1}
            />
        </div>
    )
}

export default Slider;