function NoteCard({ note }) {

    return (

        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "16px",
                background: "#fff"
            }}
        >

            <h2>{note.title}</h2>

            <p>{note.description}</p>

            <p>
                <strong>Subject:</strong> {note.subject}
            </p>

            <p>
                <strong>Topic:</strong> {note.topic}
            </p>

            <p>
                <strong>Uploaded By:</strong>{" "}
                {note.uploadedBy?.name}
            </p>

        </div>

    );

}

export default NoteCard;