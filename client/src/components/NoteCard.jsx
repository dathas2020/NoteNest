import {
    FileText,
    User,
    ExternalLink,
    Pencil
} from "lucide-react";
import api from "../services/api";
import toast from "react-hot-toast";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { useNavigate } from "react-router-dom";

function NoteCard({ note }) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    const handleDelete = async () => {

        try {

            await api.delete(`/notes/${note._id}`);

            toast.success("Resource deleted successfully!");

            setShowDeleteModal(false);

            window.location.reload();

        } catch (error) {

            toast.error(
                error.response?.data?.message || error.message
            );

        }

    };

    const currentUser = JSON.parse(
        localStorage.getItem("user")
    );

    const isOwner = currentUser?.id === note.uploadedBy?._id;

    return (

        <div
            className="
                bg-[#141821]
                border
                border-[#2A3142]
                rounded-xl
                p-6
                shadow-md
                hover:border-violet-500
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
                flex
                flex-col
                justify-between
            "
        >

            <div>

                <div className="flex items-center gap-2 mb-3">

                    <FileText
                        size={22}
                        className="text-violet-400"
                    />

                    <h2 className="text-2xl font-semibold leading-tight">

                        {note.title}

                    </h2>

                </div>

                <p className="text-slate-400 mb-6">

                    {note.description}

                </p>

                <div className="space-y-4">

                    <div>

                        <p className="
                            uppercase
                            tracking-widest
                            text-xs
                            text-slate-500
                        ">
                            Subject
                        </p>

                        <p className="font-medium">

                            {note.subject}

                        </p>

                    </div>

                    <div>

                        <p className="
                            uppercase
                            tracking-widest
                            text-xs
                            text-slate-500
                        ">
                            Topic
                        </p>

                        <p className="font-medium">

                            {note.topic}

                        </p>

                    </div>

                </div>

            </div>

            <div className="mt-8 pt-4 border-t border-[#2A3142] flex justify-between items-center">

                <span className="flex items-center gap-2 text-slate-400">

                    <User size={16} />

                    Uploaded by {note.uploadedBy?.name}

                </span>

                <div className="flex items-center gap-4">

                    {isOwner && (

                        <>

                            <button
                                onClick={() => navigate(`/edit/${note._id}`)}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-amber-400
                                    hover:text-amber-300
                                    font-medium
                                "
                            >
                                <Pencil size={16} />
                                Edit
                            </button>

                            <button
                                onClick={() => setShowDeleteModal(true)}
                                className="
                                    text-red-400
                                    hover:text-red-300
                                    font-medium
                                "
                            >
                                Delete
                            </button>

                        </>

                    )}

                    <a
                        href={`http://localhost:5000/uploads/${note.fileUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex
                            items-center
                            gap-2
                            text-violet-400
                            hover:text-violet-300
                            font-medium
                        "
                    >
                        <ExternalLink size={16} />
                        View PDF
                    </a>

                </div>

            </div>

            <ConfirmModal
                isOpen={showDeleteModal}
                title="Delete Resource?"
                message="This action cannot be undone."
                onCancel={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
            />

        </div>
    )

}

export default NoteCard;