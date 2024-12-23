import React, { useState } from 'react';
import styles from './style.module.css';
import PasswordView from '../PasswordView';
import Form from '../Form';

function App() {
    const [password, setPassword] = useState(null);

    return (
        <div className={styles.app}>
            <header>
                <h1>Password Generator</h1>
            </header>
            <main>
                <PasswordView password={password} />
                <Form onSubmit={setPassword} />
            </main>
        </div>
    );
}

export default App;
