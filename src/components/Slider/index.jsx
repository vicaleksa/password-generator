import React from "react";
import styles from "./style.module.css";

function Slider( {name, value, handleChange} ) {
    return (
        <div className={styles.slider_container}>
            <div className={styles.label}>
                <label htmlFor="length">Character Length</label>
                <span className={styles.length}>{value}</span>
            </div>
            <input className={styles.range_input}
                type="range"
                id="length"
                value={value}
                name={name}
                min={4}
                max={20}
                onChange={handleChange}
            />
        </div>
    )
}

export default Slider;