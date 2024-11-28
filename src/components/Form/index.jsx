import React, { useState } from "react";
import styles from "./style.module.css";
import Slider from "../Slider";
import Checkbox from "../Checkbox";
import Button from "../Button";

function Form() {
    const [formData, setFormData] = useState(
        {
            length: 4,
            uppercase: true,
            lowercase: true,
            numbers: false,
            symbols: true
        }
    );

    return (
        <form className={styles.form_password}>
            <Slider length={formData.length} />
            <div className={styles.checkbox_group}>
                <Checkbox
                    text={"Include Uppercase Letters"}
                    name={"uppercase"}
                    checked={formData.uppercase}
                />
                <Checkbox
                    text={"Include Lowercase Letters"}
                    name={"lowercase"}
                    checked={formData.lowercase}
                />
                <Checkbox
                    text={"Include Numbers"}
                    name={"numbers"}
                    checked={formData.numbers}
                />
                <Checkbox
                    text={"Include Symbols"}
                    name={"symbols"}
                    checked={formData.symbols}
                />
            </div>
            <Button />
        </form>
    )
}

export default Form;