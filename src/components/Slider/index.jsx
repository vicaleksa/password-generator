import React from 'react';
import clsx from 'clsx';
import styles from './style.module.css';

function Slider({
    name,
    value,
    min,
    max,
    onChange,
}) {
    const percentValue = 100 - (100 / (max - min)) * (max - value);

    return (
        <div className={styles.slider_container}>
            <div className={styles.label}>
                <label htmlFor="length">Character Length</label>
                <span className={styles.length}>{value}</span>
            </div>
            <input
                className={clsx(styles.range_input, {
                    [styles.border_radius_left]: Number(value) === min,
                    [styles.border_radius_right]: Number(value) === max,
                })}
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
