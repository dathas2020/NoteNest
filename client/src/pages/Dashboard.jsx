import { useEffect, useState } from "react";
import api from "../services/api";
import Layout from "../components/Layout";
import NoteCard from "../components/NoteCard";

function Dashboard() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {

        fetchNotes();

    }, []);

    const fetchNotes = async () => {

        try {

            const res = await api.get("/notes");

            setNotes(res.data.notes);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <Layout>

            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <p className="text-slate-400 mb-8">
                Your Notes
            </p>

            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
            ">

                {notes.map((note) => (
                    <NoteCard
                        key={note._id}
                        note={note}
                    />
                ))}

            </div>

        </Layout>

    );

}

export default Dashboard;