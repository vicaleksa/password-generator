import React from "react";
import styles from "./style.module.css";
import PasswordVeiw from "../PasswordVeiw";
import Form from "../Form";

function App() {
    return (
        <div className={styles.app}>
            <header>
                <h1>Password Generator</h1>
            </header>
            <main>
                <PasswordVeiw />
                <Form />
            </main>
        </div>
    )
}

export default App;