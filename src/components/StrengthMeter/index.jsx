import React from 'react';
import clsx from 'clsx';
import styles from './style.module.css';

function StrengthMeter({ passwordComplexity }) {
    return (
        <div className={styles.strengthMeter_container}>
            <span className={styles.strengthMeter_label}>Strength</span>
            <div className={styles.passwordStrength}>
                {passwordComplexity}
                <div className={styles.passwordStrength_visual}>
                    <div className={clsx(styles.passwordStrength_visual_block, {
                        [styles.tooWeak]: passwordComplexity === 'Too weak!',
                        [styles.weak]: passwordComplexity === 'Weak',
                        [styles.medium]: passwordComplexity === 'Medium',
                        [styles.strong]: passwordComplexity === 'Strong',
                    })}
                    />
                    <div className={clsx(styles.passwordStrength_visual_block, {
                        [styles.weak]: passwordComplexity === 'Weak',
                        [styles.medium]: passwordComplexity === 'Medium',
                        [styles.strong]: passwordComplexity === 'Strong',
                    })}
                    />
                    <div className={clsx(styles.passwordStrength_visual_block, {
                        [styles.medium]: passwordComplexity === 'Medium',
                        [styles.strong]: passwordComplexity === 'Strong',
                    })}
                    />
                    <div className={clsx(styles.passwordStrength_visual_block, {
                        [styles.strong]: passwordComplexity === 'Strong',
                    })}
                    />
                </div>
            </div>
        </div>
    );
}

export default StrengthMeter;
