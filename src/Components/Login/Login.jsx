import React from 'react';
import {useForm} from 'react-hook-form';
import classes from './Login.module.css'
function LoginForm(props) {

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>

            <label>
                <input className={classes.inputText} type='text' placeholder={'login'} {...register('login', {
                    required: 'This field is required !',

                })}/>
            </label>
            <div className={classes.inputError}>
                <p >{errors?.login && <p className={classes.text}>{errors?.login?.message || 'Error'}</p>}</p>
            </div>
            <div>
                <label>
                    <input className={classes.inputText} type='text' placeholder={'password'} {...register('password', {
                        required: 'This field is required !',
                    })}/>
                </label>
                <div className={classes.inputError}>
                    <p className={classes.text}>{errors?.password && <p>{errors?.password?.message || 'Error'}</p>}</p>
                </div>
            </div>
            <div>
                <input className={classes.inputCheckbox} type='checkbox'/> remember me
            </div>
            <div>
                <button className={classes.loginBtn} disabled={!isValid}>Login</button>
            </div>
        </form>
    )
}

function Login(props) {
    return (
        <div className={classes.loginContainer}>
            <LoginForm/>
        </div>
    )
}

export default Login;