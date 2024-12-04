import React, { useState } from "react";
import styles from "./style.module.css";
import Slider from "../Slider";
import Checkbox from "../Checkbox";
import Button from "../Button";
import StrengthMeter from "../StrengthMeter";
import generatePassword from "/src/generatePassword.jsx";

function Form({ onSubmit }) {
    const [formData, setFormData] = useState(
        {
            length: 4,
            uppercase: true,
            lowercase: false,
            numbers: false,
            symbols: false
        }
    );

    const handleChange = (e) => {
        const {type, name, value, checked} = e.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const generatedPassword = generatePassword(
            formData.length,
            formData.uppercase,
            formData.lowercase,
            formData.numbers,
            formData.symbols
        );
        onSubmit(generatedPassword);
    }

    return (
        <form
            className={styles.form_password}
            onSubmit={handleSubmit}
            name="password_generator"
        >
            <Slider
                name={'length'}
                value={formData.length}
                handleChange={handleChange}
            />
            <div className={styles.checkbox_group}>
                <Checkbox
                    text={"Include Uppercase Letters"}
                    name={"uppercase"}
                    checked={formData.uppercase}
                    handleChange={handleChange}
                />
                <Checkbox
                    text={"Include Lowercase Letters"}
                    name={"lowercase"}
                    checked={formData.lowercase}
                    handleChange={handleChange}
                />
                <Checkbox
                    text={"Include Numbers"}
                    name={"numbers"}
                    checked={formData.numbers}
                    handleChange={handleChange}
                />
                <Checkbox
                    text={"Include Symbols"}
                    name={"symbols"}
                    checked={formData.symbols}
                    handleChange={handleChange}
                />
            </div>
            <StrengthMeter />
            <Button />
        </form>
    )
}

export default Form;