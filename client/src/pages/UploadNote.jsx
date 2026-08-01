import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import Input from "../components/Input";

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

            alert("Note Uploaded!");

            navigate("/dashboard");

        } catch (error) {

            alert(error.response?.data?.message || error.message);

        }

    };

    return (

        <div>

            <h1>Upload Note</h1>

            <form onSubmit={handleSubmit}>

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
                    placeholder="PDF Name"
                    value={form.fileUrl}
                    onChange={handleChange}
                />

                <Button type="submit">
                    Upload
                </Button>

            </form>

        </div>

    );

}

export default UploadNote;