import React from 'react';
import styles from './style.module.css';

function Slider({
    name,
    value,
    min,
    max,
    onChange,
}) {
    const percentValue = 100 - (100 / (max - min)) * (max - value) - 0.1;

    return (
        <div className={styles.slider_container}>
            <div className={styles.label}>
                <label htmlFor="length">Character Length</label>
                <span className={styles.length}>{value}</span>
            </div>
            <input
                className={styles.range_input}
                type="range"
                id="length"
                value={value}
                name={name}
                min={min}
                max={max}
                style={{
                    background: `linear-gradient(to right, #A4FFAF ${percentValue}%, #18171F ${percentValue}%)`,
                }}
                onChange={onChange}
            />
        </div>
    );
}

export default Slider;
