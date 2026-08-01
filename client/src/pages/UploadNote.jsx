import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

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

                <input
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                />

                <input
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <input
                    name="subject"
                    placeholder="Subject"
                    onChange={handleChange}
                />

                <input
                    name="topic"
                    placeholder="Topic"
                    onChange={handleChange}
                />

                <input
                    name="fileUrl"
                    placeholder="PDF Name"
                    onChange={handleChange}
                />

                <button type="submit">

                    Upload

                </button>

            </form>

        </div>

    );

}

export default UploadNote;