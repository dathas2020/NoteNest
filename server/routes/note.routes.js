import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import {
    createNote,
    getAllNotes,
    searchNotes
} from "../controllers/note.controller.js";

const router = express.Router();

router.post("/", authMiddleware, createNote);

router.get("/", getAllNotes);

router.get("/search", searchNotes);

export default router;