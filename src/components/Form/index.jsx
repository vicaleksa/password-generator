import React, { useState } from 'react';
import generatePassword from 'utils/generatePassword';
import getPasswordComplexity from 'utils/getPasswordComplexity';
import styles from './style.module.css';
import Slider from '../Slider';
import Checkbox from '../Checkbox';
import GenerateButton from '../GenerateButton';
import StrengthMeter from '../StrengthMeter';

function Form({ onSubmit }) {
    const [formData, setFormData] = useState(
        {
            length: 4,
            uppercase: false,
            lowercase: false,
            numbers: false,
            symbols: false,
        },
    );
    const [passwordComplexity, setPasswordComplexity] = useState(null);

    const handleChange = (e) => {
        const {
            type,
            name,
            value,
            checked,
        } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const generatedPassword = generatePassword(
            formData.length,
            formData.uppercase,
            formData.lowercase,
            formData.numbers,
            formData.symbols,
        );

        setPasswordComplexity(() => getPasswordComplexity(
            formData.length,
            formData.uppercase,
            formData.lowercase,
            formData.numbers,
            formData.symbols,
        ));

        onSubmit(generatedPassword);
    };

    return (
        <form
            className={styles.form_password}
            onSubmit={handleSubmit}
            name="password_generator"
        >
            <Slider
                name="length"
                value={formData.length}
                onChange={handleChange}
                min={4}
                max={20}
            />
            <div className={styles.checkbox_group}>
                <Checkbox
                    name="uppercase"
                    checked={formData.uppercase}
                    onChange={handleChange}
                >
                    Include Uppercase Letters
                </Checkbox>
                <Checkbox
                    name="lowercase"
                    checked={formData.lowercase}
                    onChange={handleChange}
                >
                    Include Lowercase Letters
                </Checkbox>
                <Checkbox
                    name="numbers"
                    checked={formData.numbers}
                    onChange={handleChange}
                >
                    Include Numbers
                </Checkbox>
                <Checkbox
                    name="symbols"
                    checked={formData.symbols}
                    onChange={handleChange}
                >
                    Include Symbols
                </Checkbox>
            </div>
            <StrengthMeter passwordComplexity={passwordComplexity} />
            <GenerateButton
                disabled={
                    !formData.uppercase
                    && !formData.lowercase
                    && !formData.numbers
                    && !formData.symbols
                }
            />
        </form>
    );
}

export default Form;
