function NoteCard({ note }) {

    return (

        <div className="
            bg-[#141821]
            border
            border-[#2A3142]
            rounded-xl
            p-5
            shadow-md
            hover:shadow-xl
            transition
        ">

            <h2 className="text-xl font-semibold">

                {note.title}

            </h2>

            <p className="text-slate-400 mt-2">

                {note.description}

            </p>

            <p className="mt-4">

                <span className="text-violet-400">

                    Subject

                </span>

                {" "}

                {note.subject}

            </p>

            <p>

                <span className="text-violet-400">

                    Topic

                </span>

                {" "}

                {note.topic}

            </p>

            <p className="text-slate-400 mt-3">

                Uploaded by {note.uploadedBy?.name}

            </p>

        </div>

    );

}

export default NoteCard;