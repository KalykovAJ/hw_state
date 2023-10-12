import { useState } from 'react';
import styles from './Form.module.css'

function Form2() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputChangeHandler = (event) => {
        const currentInput = event.target.name
        if (currentInput === 'name') {
            setName(event.target.value)
        } else if (currentInput === 'email') {
            setEmail(event.target.value)
        } else if (currentInput === 'password') {
            setPassword(event.target.value)
        }
      
        
    }
   

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(name);
        console.log(email);
        console.log(password);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={styles.form}>
                <input name='name' onChange={inputChangeHandler} type="text" placeholder='name'/>
                <input name='email' onChange={inputChangeHandler} type="email" placeholder='email' />
                <input name='password' onChange={inputChangeHandler} type="password" placeholder='password'/>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form2