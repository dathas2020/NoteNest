import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import NoteCard from "./NoteCard";

function LatestNotes() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {

        fetchLatestNotes();

    }, []);

    const fetchLatestNotes = async () => {

        try {

            const res = await api.get("/notes");

            setNotes(
                res.data.notes
                    .slice(0, 3)
            );

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <section className="py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <div className="flex justify-between items-center mb-10">

                    <div>

                        <h2 className="text-4xl font-bold">

                            Recently Added

                        </h2>

                        <p className="text-slate-400 mt-2">

                            Discover the latest study resources shared by the community.

                        </p>

                    </div>

                    <Link
                        to="/notes"
                        className="
                            text-violet-400
                            hover:text-violet-300
                            font-medium
                        "
                    >
                        Browse All →
                    </Link>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {notes.map((note) => (

                        <NoteCard
                            key={note._id}
                            note={note}
                            showActions={false}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default LatestNotes;