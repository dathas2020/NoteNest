import upload from "../config/multer.js";
import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import protect from "../middleware/auth.middleware.js";

import {
    createNote,
    getAllNotes,
    searchNotes,
    deleteNote,
    updateNote
} from "../controllers/note.controller.js";

const router = express.Router();

router.post(
    "/",
    protect,
    upload.single("pdf"),
    createNote
);

router.get("/", getAllNotes);

router.get("/search", searchNotes);

router.delete(
    "/:id",
    protect,
    deleteNote
);

router.put(
    "/:id",
    protect,
    updateNote
);

export default router;