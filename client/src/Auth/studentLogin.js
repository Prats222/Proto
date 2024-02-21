import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth.js';
import { toast } from 'react-toastify';

const StudentLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [auth, setAuth] = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('/api/vit/auth/student/studentLogin', { email, password });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || '/');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong');
        }
    };

    return (
        <div class="Master">
        <div class="wrapper">
            <div class="loginDiv">
                <div class="blueLine">
                </div>
                <p class="loginHeader">Login</p>
            </div>

            <div class="inputDiv">

                <div class="form">
                    <form action="">
                        <div class="inputBox">
                            <label for="username"></label>
                            <input type="text" class="inputField" id="username" name="username" placeholder="Username"
                                required>
                        </div>

                        <div class="inputBox">
                            <label for="password"></label>
                            <input type="password" class="inputField" id="password" name="password"
                                placeholder="password" required>
                        </div>
                    </form>
                </div>

                <div class="submitButton">
                    <button type="submit" class="Submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            <div class="forgot">
                <div class="forgot-Password">
                    <a href="#">Forgot Password</a>
                </div>
                <div class="forgot-login">
                    <a href="#">Forgot Login</a>
                </div>
            </div>
        </div>
    </div>

    );
};

export default StudentLogin;
