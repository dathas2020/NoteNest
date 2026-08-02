import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Upload,
    User,
    LogOut
} from "lucide-react";

function Navbar() {

    const navigate = useNavigate();

    const location = useLocation();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {

        localStorage.clear();

        navigate("/login");

    };

    return (

        <nav className="sticky top-0 z-50 border-b border-[#2A3142] bg-[#141821]">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                <Link
                    to="/dashboard"
                    className="
                        text-2xl
                        font-bold
                        text-violet-400
                        hover:text-violet-300
                        transition-colors
                    "
                >
                    NoteNest
                </Link>

                <div className="flex items-center gap-6">

                    <Link
                        to="/dashboard"
                        className={`
                            px-3
                            py-2
                            rounded-lg
                            transition-all
                            duration-200
                            ${
                                location.pathname === "/dashboard"
                                    ? "bg-violet-600 text-white"
                                    : "text-slate-300 hover:text-white hover:bg-[#202636]"
                            }
                        `}
                    >
                        <div className="flex items-center gap-2">
                            <LayoutDashboard size={18} />
                            Dashboard
                        </div>
                    </Link>

                    <Link
                        to="/upload"
                        className={`
                            px-3
                            py-2
                            rounded-lg
                            transition-all
                            duration-200
                            ${
                                location.pathname === "/upload"
                                    ? "bg-violet-600 text-white"
                                    : "text-slate-300 hover:text-white hover:bg-[#202636]"
                            }
                        `}
                    >
                        <div className="flex items-center gap-2">
                            <Upload size={18} />
                            Upload
                        </div>
                    </Link>

                    <span className="flex items-center gap-2 text-slate-300 bg-[#202636] px-3 py-2 rounded-lg">
                        <User size={18} />
                        {user?.name}
                    </span>

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition-all"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;