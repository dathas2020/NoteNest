import { useEffect, useState } from "react";
import api from "../services/api";
import Layout from "../components/Layout";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import {
    BookOpen,
    Library,
    User
} from "lucide-react";

function Dashboard() {

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");

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

    const filteredNotes = notes.filter((note) => {

        const query = search.toLowerCase();

        return (

            note.title.toLowerCase().includes(query) ||

            note.subject.toLowerCase().includes(query) ||

            note.topic.toLowerCase().includes(query)

        );

    });

    return (

        <Layout>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

                <div className="bg-[#141821] border border-[#2A3142] rounded-xl p-5">

                    <p className="flex items-center gap-2 text-slate-400 text-sm">
                        <BookOpen size={18} />
                        Total Notes
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {notes.length}
                    </h2>

                </div>

                <div className="bg-[#141821] border border-[#2A3142] rounded-xl p-5">

                    <p className="flex items-center gap-2 text-slate-400 text-sm">
                        <Library size={18} />
                        Subjects
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {
                            [...new Set(notes.map(note => note.subject))].length
                        }
                    </h2>

                </div>

                <div className="bg-[#141821] border border-[#2A3142] rounded-xl p-5">

                    <p className="flex items-center gap-2 text-slate-400 text-sm">
                        <User size={18} />
                        Logged In
                    </p>

                    <h2 className="text-xl font-semibold mt-2">
                        {JSON.parse(localStorage.getItem("user"))?.name}
                    </h2>

                </div>

            </div>

            <SearchBar

                value={search}

                onChange={(e) => setSearch(e.target.value)}

            />

            <h2 className="text-xl font-semibold mb-2">
                Study Vault
            </h2>

            <p className="text-slate-400 mb-5">
                Showing {filteredNotes.length} of {notes.length} resources
            </p>

            {
                filteredNotes.length === 0 ? (

                    <div className="
                        bg-[#141821]
                        border
                        border-[#2A3142]
                        rounded-xl
                        p-12
                        text-center
                    ">

                        <p className="text-5xl">
                            📚
                        </p>

                        <h3 className="text-xl font-semibold mt-4">
                            No notes yet
                        </h3>

                        <p className="text-slate-400 mt-2">
                            Upload your first study note to get started.
                        </p>

                    </div>

                ) : (

                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3
                        gap-6
                    ">

                        {filteredNotes.map((note) => (

                            <NoteCard
                                key={note._id}
                                note={note}
                            />

                        ))}

                    </div>

                )
            }

        </Layout>

    );

}

export default Dashboard;