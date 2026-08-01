import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

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

            alert(error.response.data.message);

        }

    };

    return (

        <div>

            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <input
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <button type="submit">

                    Register

                </button>

            </form>

        </div>

    );

}

export default Register;