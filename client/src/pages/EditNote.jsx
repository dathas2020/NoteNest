import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import {
    Save
} from "lucide-react";

function EditNote() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [form, setForm] = useState({
        title: "",
        description: "",
        subject: "",
        topic: ""
    });


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    useEffect(() => {

        fetchNote();

    }, []);

    const fetchNote = async () => {

        try {

            const res = await api.get("/notes");

            const note = res.data.notes.find(
                (n) => n._id === id
            );

            if (!note) {

                toast.error("Note not found.");

                navigate("/dashboard");

                return;

            }

            setForm({

                title: note.title,
                description: note.description,
                subject: note.subject,
                topic: note.topic

            });

        } catch (error) {

            toast.error(error.response?.data?.message || error.message);

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/notes/${id}`, form);

            toast.success("Resource updated successfully!");

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
                        Edit Resource
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Update your note information.
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

                        

                            

                        <Button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2"
                        >
                            <Save />

                            Save Changes
                        </Button>

                    </form>

                </div>

            </div>

        </Layout>

    );

}

export default EditNote;