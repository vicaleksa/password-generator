import React, { useState } from 'react';
import styles from './style.module.css';
import PasswordVeiw from '../PasswordVeiw';
import Form from '../Form';

function App() {
    const [password, setPassword] = useState(null);

    const onSubmit = (newPassword) => setPassword(newPassword);

    return (
        <div className={styles.app}>
            <header>
                <h1>Password Generator</h1>
            </header>
            <main>
                <PasswordVeiw password={password} />
                <Form onSubmit={onSubmit} />
            </main>
        </div>
    );
}

export default App;
