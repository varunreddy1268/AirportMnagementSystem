import { useState } from 'react';
import axios from '../../axios/axiosInstance';
import Heading from '../Heading/Heading';

import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Home from '../Home/Home';

const CreateUser = props => {
    
    
    const onFormSubmitHandler = event => {
        event.preventDefault();
    
        let user = {};

        for(let i = 0; i < event.target.length - 1; i++) {
            user[event.target[i].name] = event.target[i].value;
        }
    
        axios.post(`/signup/user`, user)
        .then(response => {
            
        })
        .catch(error => {
           
        });

        document.getElementById("add-user-form").reset();
    };
    
    return (
        <>
            <Home />

            <div class="create_emp">
		<Form id="add-user-form" onSubmit={onFormSubmitHandler}>
        <Input label="Username" type="text" name="username"  required={true} />
        <br></br>
        <Input label="Email" type="email" name="email" required={true} />
        <br></br>
        <Input label="Password" type="password" name="password"  required={true} />   
        <br></br>         
		<Button type="submit"> Sign Up </Button>
		</Form>
	</div>
    
            
            
        </>
    )
};

export default CreateUser;