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

        <div>
            <Layout/>

            <h1>Dashboard</h1>

            <h2>Your Notes</h2>

            {
                notes.map((note) => (
                    <NoteCard
                        key={note._id}
                        note={note}
                    />
                ))
            }

        </div>

    );

}

export default Dashboard;