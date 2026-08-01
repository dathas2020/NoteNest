import Note from "../models/Note.js";

// Create Note
export const createNote = async (req, res) => {
    try {

        const note = await Note.create({
            ...req.body,
            uploadedBy: req.user
        });

        res.status(201).json({
            success: true,
            message: "Note uploaded successfully",
            note
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Notes
export const getAllNotes = async (req, res) => {
    try {

        const notes = await Note.find().populate(
            "uploadedBy",
            "name email"
        );

        res.status(200).json({
            success: true,
            notes
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Search Notes
export const searchNotes = async (req, res) => {

    try {

        const q = req.query.q;

        const notes = await Note.find({
            title: {
                $regex: q,
                $options: "i"
            }
        });

        res.status(200).json({
            success: true,
            notes
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};