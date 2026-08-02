import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import Input from "../components/Input";
import toast from "react-hot-toast";

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

            toast.success("Login successful!");

            navigate("/dashboard");

        } catch (error) {

            toast.error(error.response?.data?.message || error.message);

        }

    };

    return (

    <div className="min-h-screen bg-[#0B0D12] flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-[#141821] border border-[#2A3142] rounded-2xl shadow-xl p-8">

            <h1 className="text-3xl font-bold text-center">
                Welcome Back
            </h1>

            <p className="text-slate-400 text-center mt-2 mb-8">
                Sign in to continue to NoteNest.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

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

                <Button type="submit" className="w-full">
                    Login
                </Button>

                <div className="text-center pt-4 border-t border-[#2A3142]">

                    <p className="text-slate-400 text-sm">

                        Don't have an account?

                        {" "}

                        <button
                            type="button"
                            onClick={() => navigate("/register")}
                            className="text-violet-400 hover:text-violet-300 font-medium"
                        >
                            Create one
                        </button>

                    </p>

                </div>

            </form>

        </div>

    </div>

    );

}

export default Login;