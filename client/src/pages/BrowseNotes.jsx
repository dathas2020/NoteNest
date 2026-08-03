import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Layout from "../components/Layout";
import NoteCard from "../components/NoteCard";
import api from "../services/api";

function BrowseNotes() {

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {

        fetchNotes();

    }, [page]);

    const fetchNotes = async () => {

        try {

            const res = await api.get(
                `/notes?page=${page}&limit=30`
            );

            setNotes(res.data.notes);

            setTotalPages(res.data.totalPages);

        } catch (error) {

            console.error(error);

        }

    };

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <Layout>

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-10">

                    <h1 className="text-5xl font-bold">

                        Browse Notes

                    </h1>

                    <p className="mt-3 text-slate-400">

                        Discover study resources shared by the community.

                    </p>

                </div>

                <div className="relative max-w-2xl mx-auto mb-12">

                    <Search
                        size={18}
                        className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-500
                        "
                    />

                    <input
                        type="text"
                        placeholder="Search notes..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                            w-full
                            bg-[#141821]
                            border
                            border-[#2A3142]
                            rounded-xl
                            pl-12
                            pr-4
                            py-3
                            focus:outline-none
                            focus:border-violet-500
                        "
                    />

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {filteredNotes.map((note) => (

                        <NoteCard
                            key={note._id}
                            note={note}
                            onDelete={(id) =>
                                setNotes((prev) =>
                                    prev.filter((note) => note._id !== id)
                                )
                            }
                        />

                    ))}

                </div>

            </div>

            <div className="flex justify-center items-center gap-4 mt-10">

                <button

                    disabled={page === 1}

                    onClick={() => setPage(page - 1)}

                    className="
                        px-4
                        py-2
                        rounded-lg
                        border
                        border-[#2A3142]
                        disabled:opacity-40
                        hover:border-violet-500
                    "

                >
                    Previous
                </button>

                <span>

                    Page {page} of {totalPages}

                </span>

                <button

                    disabled={page === totalPages}

                    onClick={() => setPage(page + 1)}

                    className="
                        px-4
                        py-2
                        rounded-lg
                        border
                        border-[#2A3142]
                        disabled:opacity-40
                        hover:border-violet-500
                    "

                >
                    Next
                </button>

            </div>

        </Layout>

    );

}

export default BrowseNotes;