import { useEffect, useState } from "react";
import api from "../services/api";

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

            <h1>Dashboard</h1>

            <h2>Your Notes</h2>

            {
                notes.map((note) => (

                    <div
                        key={note._id}
                        style={{
                            border: "1px solid gray",
                            marginBottom: "10px",
                            padding: "10px"
                        }}
                    >

                        <h3>{note.title}</h3>

                        <p>{note.description}</p>

                        <p><strong>Subject:</strong> {note.subject}</p>

                        <p><strong>Topic:</strong> {note.topic}</p>

                        <p>
                            <strong>Uploaded By:</strong>
                            {" "}
                            {note.uploadedBy?.name}
                        </p>

                    </div>

                ))
            }

        </div>

    );

}

export default Dashboard;