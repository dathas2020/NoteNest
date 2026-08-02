function NoteCard({ note }) {

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

                    <span className="text-xl">
                        📄
                    </span>

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

                <span className="text-slate-400">

                    👤 {note.uploadedBy?.name}

                </span>

                <button
                    className="
                        text-violet-400
                        hover:text-violet-300
                        font-medium
                    "
                >
                    View →
                </button>

            </div>

        </div>

    );

}

export default NoteCard;