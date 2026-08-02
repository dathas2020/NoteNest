import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BrowseNotes from "./pages/BrowseNotes";
import UploadNote from "./pages/UploadNote";
import NoteDetails from "./pages/NoteDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import EditNote from "./pages/EditNote";

function App() {

    return (

        <Routes>

            <Route path="/" element={<Landing />} />

            <Route
                path="/edit/:id"
                element={
                    <ProtectedRoute>
                        <EditNote />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />

            <Route
                path="/register"
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
            />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route path="/notes" element={<BrowseNotes />} />

            <Route
                path="/upload"
                element={
                    <ProtectedRoute>
                        <UploadNote />
                    </ProtectedRoute>
                }
            />

            <Route path="/notes/:id" element={<NoteDetails />} />

        </Routes>

    );

}

export default App;