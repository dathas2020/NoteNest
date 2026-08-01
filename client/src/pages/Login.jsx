import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post("/auth/login", form);

            localStorage.setItem("token", res.data.token);

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            alert("Login Successful!");

            navigate("/dashboard");

        } catch (error) {

            alert(error.response?.data?.message || error.message);

        }

    };

    return (

        <div>

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <Input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />

                <Button type="submit">
                    Login
                </Button>

            </form>

        </div>

    );

}

export default Login;