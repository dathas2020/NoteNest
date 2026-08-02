import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import { UploadCloud } from "lucide-react";

function UploadNote() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: "",
        subject: "",
        topic: "",
        fileUrl: ""
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

            await api.post("/notes", form);

            toast.success("Note uploaded!");

            navigate("/dashboard");

        } catch (error) {

            toast.error(error.response?.data?.message || error.message);

        }

    };

    return (

        <Layout>

            <div className="max-w-2xl mx-auto">

                <div className="mb-10">

                    <h1 className="text-4xl font-bold">
                        Contribute to the Community
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Share your study resources and help fellow students learn.
                    </p>

                </div>

                <div className="
                    bg-[#141821]
                    border
                    border-[#2A3142]
                    rounded-2xl
                    p-8
                    shadow-lg
                ">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <Input
                            name="title"
                            placeholder="Title"
                            value={form.title}
                            onChange={handleChange}
                        />

                        <Input
                            name="description"
                            placeholder="Description"
                            value={form.description}
                            onChange={handleChange}
                        />

                        <Input
                            name="subject"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                        />

                        <Input
                            name="topic"
                            placeholder="Topic"
                            value={form.topic}
                            onChange={handleChange}
                        />

                        <Input
                            name="fileUrl"
                            placeholder="File URL"
                            value={form.fileUrl}
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2"
                        >
                            <UploadCloud size={20} />

                            Upload Resource
                        </Button>

                    </form>

                </div>

            </div>

        </Layout>

    );

}

export default UploadNote;