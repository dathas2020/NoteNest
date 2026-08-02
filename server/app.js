import path from "path";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./controllers/auth.routes.js";
import noteRoutes from "./routes/note.routes.js";

const app = express();


app.use(cors());

app.use(express.json());

app.use(cookieParser());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/notes", noteRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("🚀 NoteNest API is running...");
});

export default app;