import {
    Download,
    FileText,
    User,
    ExternalLink,
    Pencil,
    HardDrive,
    Clock3
} from "lucide-react";
import api from "../services/api";
import toast from "react-hot-toast";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { useNavigate } from "react-router-dom";

function NoteCard({
    note,
    onDelete,
    showActions = true
}) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    const handleDelete = async () => {

        try {

            await api.delete(`/notes/${note._id}`);

            toast.success("Resource deleted successfully!");

            setShowDeleteModal(false);

            onDelete(note._id);

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

    const formatFileSize = (bytes) => {

        if (bytes < 1024) return `${bytes} B`;

        if (bytes < 1024 * 1024)
            return `${(bytes / 1024).toFixed(1)} KB`;

        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

    };

    const uploadedAgo = () => {

        const date = new Date(note.createdAt);

        const diff = Date.now() - date.getTime();

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (days === 0) return "Today";

        if (days === 1) return "1 day ago";

        return `${days} days ago`;

    };

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

                   <div className="
                        pt-5
                        pb-5
                        border-t
                        border-b
                        border-[#2A3142]
                        grid
                        grid-cols-3
                        gap-4
                    ">

                        <div className="flex items-center gap-2 text-slate-400">
                            <FileText size={16} />
                            <span>{note.pages} Pages</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400">
                            <HardDrive size={16} />
                            <span>{formatFileSize(note.fileSize)}</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400">
                            <Clock3 size={16} />
                            <span>{uploadedAgo()}</span>
                        </div>

                    </div>

                </div>

            </div>

            <div className="mt-6">

                <div className="flex items-center gap-2 text-slate-400 min-w-0">

                    <User
                        size={16}
                        className="shrink-0"
                    />

                    <span
                        className="truncate max-w-[110px]"
                        title={note.uploadedBy?.name}
                    >
                        {note.uploadedBy?.name}
                    </span>

                </div>

                <div className="flex items-center gap-6 mt-4">

                    {showActions && isOwner && (

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

                    {showActions && (
                        <>

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
                                View
                            </a>

                            <a
                                href={`http://localhost:5000/api/notes/download/${note._id}`}
                                download
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    font-medium
                                    text-sky-400
                                    hover:text-sky-300
                                "
                            >
                                <Download size={16} />
                                Download
                            </a>

                        </>
                    )}

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