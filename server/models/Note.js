import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: String,

        subject: String,

        topic: String,

        fileUrl: String,

        pages: {
            type: Number,
            default: 0
        },

        fileSize: {
            type: Number,
            default: 0
        },

        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Note", noteSchema);