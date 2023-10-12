import { useState } from 'react';
import styles from './Form.module.css'

function Form3() {

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    })
    

    const inputChangeHandler = (event) => {
        const currentInput = event.target.name
        // setInput({
        //     ...input,
        //     [currentInput]: event.target.value,

        // })
        setInput((prevState) => {
            return {
                ...prevState,
                [currentInput]: event.target.value
            }
        })


    }
   

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(input);
      
       
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

export default Form3