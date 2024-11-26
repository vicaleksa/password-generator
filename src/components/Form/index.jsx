import React, { useState } from "react";
import styles from "./style.module.css";
import Slider from "../Slider";
import Checkbox from "../Checkbox";

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
        <div>
            <Slider length={formData.length} />
            <div className={styles.checkbox_container}>
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
        </div>
    )
}

export default Form;