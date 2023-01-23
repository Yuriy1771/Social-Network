import React from 'react';
import {useForm} from 'react-hook-form';
import classes from './Login.module.css'
import {Navigate} from "react-router-dom";

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
        props.loginThunk(data.email, data.password, data.rememberMe)
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>

            <label>
                <input className={classes.inputText} type='text' placeholder={'email'} {...register('email', {
                    required: 'This field is required !',

                })}/>
            </label>
            <div className={classes.inputError}>
                <p >{errors?.email && <p className={classes.text}>{errors?.email?.message || 'Error'}</p>}</p>
            </div>
            <div>
                <label>
                    <input className={classes.inputText} type='password' placeholder={'password'} {...register('password', {
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
    if(props.isAuth === true) return <Navigate to={'/profile'}/>

    return (
        <div className={classes.loginContainer}>
            <LoginForm isAuth={props.isAuth} loginThunk={props.loginThunk}/>
        </div>
    )
}

export default Login;