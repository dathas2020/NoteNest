import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import Input from "../components/Input";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
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
        console.log("Register button clicked");

        try {

            const res = await api.post("/auth/register", form);

            alert(res.data.message);

            navigate("/login");

        } catch (error) {

            alert(error.response?.data?.message || error.message);

        }

    };

    return (

        <div>

            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <Input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />

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
                    Register
                </Button>

            </form>

        </div>

    );

}

export default Register;