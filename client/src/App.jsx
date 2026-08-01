import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BrowseNotes from "./pages/BrowseNotes";
import UploadNote from "./pages/UploadNote";
import NoteDetails from "./pages/NoteDetails";

function App() {

    return (

        <Routes>

            <Route path="/" element={<Landing />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/notes" element={<BrowseNotes />} />

            <Route path="/upload" element={<UploadNote />} />

            <Route path="/notes/:id" element={<NoteDetails />} />

        </Routes>

    );

}

export default App;