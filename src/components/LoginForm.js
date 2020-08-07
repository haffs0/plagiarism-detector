import React, { useState } from 'react'
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { fetchUser } from "../api/index"
import { authenticate } from "../api/auth-helper"


const LoginForm = () => {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email !== "" && password !== "") {
            fetchUser().then( (res) => {
                const users = res.data;
                const findUser = users.find(ele => ele.email === email)
                if (findUser) {
                    authenticate(findUser)
                    setPassword("")
                    setEmail("")
                    history.push("/essay-list")
                }
            } )
        }
    }

    return <Wrapper>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <div className="input_field">
                            <input type="email" placeholder="Please enter your email" value={email} onChange={handleEmailChange}/>
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                        <div className="input_field">
                            <input type="password" placeholder="Please enter your password" value={password} onChange={handlePasswordChange}/>
                        </div>
                    </div>
                    <div><input type="submit" value="Login"/></div>
                </Form>
           </Wrapper>
}


const Wrapper = styled.div`
    display: grid;
    place-content: center center;
    font-size: 16px;
`
const Form = styled.form`
    width: 100%;
    margin-top: 40px;
    & .input_field {
        margin: 8px 0;
    }
    & div > label {
        color: #333;
        padding-buttom: 20px;
        margin-bottom: 10px;
        font-size: 20px;
    }
    & input {
        margin: 0 0 10px;
        background: #efefef;
        border: 0;
        padding: 12px 10px;
        font-size: 16px;
        border-bottom: 1px solid gray;
        width: 250px;
    }
    & input[type=submit] {
        font-weight: bold;
        background: #12c064;
        color: #fff;
        padding: 10px 20px;
        font-size: 14px;
        text-transform: uppercase;
    }
`

export default LoginForm;