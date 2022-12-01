import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios/axiosInstance';
import './LoginUser.css'
import Heading from '../Heading/Heading';


import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Home from '../Home/Home';

const LoginUser = props => {
    const navigate = useNavigate();
    
    
    const onFormSubmitHandler = event => {
        event.preventDefault();
    
        let user = {};

        for(let i = 0; i < event.target.length - 1; i++) {
            user[event.target[i].name] = event.target[i].value;
        }
    
        axios.post(`/login/${props.role}`, user)
        .then(response => {
            navigate('/dashboard');
            
            localStorage.setItem('role', response.data.role);
            localStorage.setItem('token', `Bearer ${response.data.token}`);
            localStorage.setItem('city', response.data.city);
            localStorage.setItem('airline', response.data.airline);
        })
        .catch(error => {

        });


        document.getElementById("add-user-form").reset();
    };
    
    return (
        <>
            <Home />
{/*             
            <div>
                <Heading header="1" heading={props.heading} />

                
                <Form id="add-user-form" onSubmit={onFormSubmitHandler}>
                    <Input label="Email" type="email" name="email" required={true} />
                    <Input label="Password" type="password" name="password"  required={true} />
                    <Button type="submit"> Login </Button>
                </Form>
            </div> */}
            <div class="login-box">
        <h2>Login</h2>
        <Form id="add-user-form" onSubmit={onFormSubmitHandler}>
            <div className="user-box">
                <input  type="email" name="email" required={true} />
                <label>Email</label>
            </div>
            <div className="user-box">
                <input label="Password" type="password" name="password" required="{true}" />
                <label>Password</label>
            </div>
            <Button type="submit"> Login </Button>
            
        </Form>
    </div>


   
        </>
    )
};

export default LoginUser;