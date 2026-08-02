import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

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
                    className="text-2xl font-bold text-violet-400"
                >
                    NoteNest
                </Link>

                <div className="flex items-center gap-6">

                    <Link to="/dashboard">
                        Dashboard
                    </Link>

                    <Link to="/upload">
                        Upload
                    </Link>

                    <span className="text-gray-400">

                        {user?.name}

                    </span>

                    <button
                        onClick={handleLogout}
                        className="text-red-400 hover:text-red-300"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;