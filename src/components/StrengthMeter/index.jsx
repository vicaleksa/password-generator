import React from 'react';
import clsx from 'clsx';
import COMPLEXITY from 'constants/passwordComplexity';
import styles from './style.module.css';

const CLASS_BY_COMPLEXITY = {
    [COMPLEXITY.TOO_WEAK]: styles.tooWeak,
    [COMPLEXITY.WEAK]: styles.weak,
    [COMPLEXITY.MEDIUM]: styles.medium,
    [COMPLEXITY.STRONG]: styles.strong,
};

const TEXT_BY_COMPLEXITY = {
    [COMPLEXITY.TOO_WEAK]: 'Too Weak!',
    [COMPLEXITY.WEAK]: 'Weak',
    [COMPLEXITY.MEDIUM]: 'Medium',
    [COMPLEXITY.STRONG]: 'Strong',
};

function StrengthMeter({ passwordComplexity }) {
    return (
        <div className={styles.strengthMeter_container}>
            <span className={styles.strengthMeter_label}>Strength</span>
            <div className={styles.passwordStrength}>
                {TEXT_BY_COMPLEXITY[passwordComplexity]}
                <div className={styles.passwordStrength_visual}>
                    <div className={clsx(styles.passwordStrength_visual_block, {
                        [CLASS_BY_COMPLEXITY[passwordComplexity]]: passwordComplexity >= COMPLEXITY.TOO_WEAK,
                    })}
                    />
                    <div className={clsx(styles.passwordStrength_visual_block, {
                        [CLASS_BY_COMPLEXITY[passwordComplexity]]: passwordComplexity >= COMPLEXITY.WEAK,
                    })}
                    />
                    <div className={clsx(styles.passwordStrength_visual_block, {
                        [CLASS_BY_COMPLEXITY[passwordComplexity]]: passwordComplexity >= COMPLEXITY.MEDIUM,
                    })}
                    />
                    <div className={clsx(styles.passwordStrength_visual_block, {
                        [CLASS_BY_COMPLEXITY[passwordComplexity]]: passwordComplexity >= COMPLEXITY.STRONG,
                    })}
                    />
                </div>
            </div>
        </div>
    );
}

export default StrengthMeter;
