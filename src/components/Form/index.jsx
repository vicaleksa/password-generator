import React, { useState } from 'react';
import generatePassword from 'utils/generatePassword';
import getPasswordComplexity from 'utils/getPasswordComplexity';
import styles from './style.module.css';
import Slider from '../Slider';
import Checkbox from '../Checkbox';
import Button from '../Button';
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
                    text="Include Uppercase Letters"
                    name="uppercase"
                    checked={formData.uppercase}
                    onChange={handleChange}
                />
                <Checkbox
                    text="Include Lowercase Letters"
                    name="lowercase"
                    checked={formData.lowercase}
                    onChange={handleChange}
                />
                <Checkbox
                    text="Include Numbers"
                    name="numbers"
                    checked={formData.numbers}
                    onChange={handleChange}
                />
                <Checkbox
                    text="Include Symbols"
                    name="symbols"
                    checked={formData.symbols}
                    onChange={handleChange}
                />
            </div>
            <StrengthMeter passwordComplexity={passwordComplexity} />
            <Button
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
