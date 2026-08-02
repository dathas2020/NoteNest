import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import Input from "../components/Input";
import toast from "react-hot-toast";

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

            toast.success(res.data.message);

            navigate("/login");

        } catch (error) {

            toast.error(error.response?.data?.message || error.message);

        }

    };

    return (

    <div className="min-h-screen bg-[#0B0D12] flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-[#141821] border border-[#2A3142] rounded-2xl shadow-xl p-8">

            <h1 className="text-3xl font-bold text-center">
                Create Account
            </h1>

            <p className="text-slate-400 text-center mt-2 mb-8">
                Start sharing your study notes today.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

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

                <Button type="submit" className="w-full">
                    Register
                </Button>

                <div className="text-center pt-4 border-t border-[#2A3142]">

                    <p className="text-slate-400 text-sm">

                        Already have an account?

                        {" "}

                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="text-violet-400 hover:text-violet-300 font-medium transition"
                        >
                            Sign in
                        </button>

                    </p>

                </div>

            </form>

        </div>

    </div>

    );

}

export default Register;