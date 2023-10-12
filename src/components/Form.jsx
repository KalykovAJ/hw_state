import { useState } from 'react';
import styles from './Form.module.css'

export default function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputNameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const inputEmailChangeHandler = (event) => {
        setEmail(event.target.value)
    }
    const inputPasswordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setName('')
        setEmail('')
        setPassword('')
        console.log(name);
        console.log(email);
        console.log(password);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={styles.form}>
                <input value={name} onChange={inputNameChangeHandler} type="text" placeholder='name'/>
                <input value={email} onChange={inputEmailChangeHandler} type="email" placeholder='email' />
                <input value={password} onChange={inputPasswordChangeHandler} type="password" placeholder='password'/>
                <button>Submit</button>
            </div>
        </form>
    )
}

