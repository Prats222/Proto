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
        <div>
            Hello
        </div>
    );
};

export default StudentLogin;
