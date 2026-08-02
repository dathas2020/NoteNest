import Note from "../models/Note.js";
import fs from "fs";
import path from "path";
import { PDFDocument } from "pdf-lib";

// Create Note
export const createNote = async (req, res) => {

    try {

        const {
            title,
            description,
            subject,
            topic
        } = req.body;

        if (!req.file) {

            return res.status(400).json({
                success: false,
                message: "Please upload a PDF."
            });

        }

        const pdfBuffer = fs.readFileSync(req.file.path);

        const pdfDoc = await PDFDocument.load(pdfBuffer);

        const pages = pdfDoc.getPageCount();

        const fileSize = req.file.size;

        const note = await Note.create({

            title,
            description,
            subject,
            topic,

            fileUrl: req.file.filename,

            pages,

            fileSize,

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

// Delete Note
export const deleteNote = async (req, res) => {

    try {

        const note = await Note.findById(req.params.id);

        if (!note) {

            return res.status(404).json({
                success: false,
                message: "Note not found."
            });

        }

        if (note.uploadedBy.toString() !== req.user.toString()) {

            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this note."
            });

        }

        const filePath = path.join(
            process.cwd(),
            "uploads",
            note.fileUrl
        );

        fs.unlinkSync(filePath);

        await note.deleteOne();

        res.status(200).json({
            success: true,
            message: "Note deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Note
export const updateNote = async (req, res) => {

    try {

        const note = await Note.findById(req.params.id);

        if (!note) {

            return res.status(404).json({
                success: false,
                message: "Note not found."
            });

        }

        if (note.uploadedBy.toString() !== req.user.toString()) {

            return res.status(403).json({
                success: false,
                message: "You are not authorized to edit this note."
            });

        }

        const updatedNote = await Note.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        res.status(200).json({

            success: true,
            message: "Note updated successfully.",

            note: updatedNote

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};