import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear();

        navigate("/login");

    };

    return (

        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 30px",
                borderBottom: "1px solid #ddd"
            }}
        >

            <h2>NoteNest</h2>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center"
                }}
            >

                <Link to="/dashboard">
                    Dashboard
                </Link>

                <Link to="/upload">
                    Upload
                </Link>

                <button onClick={handleLogout}>
                    Logout
                </button>

            </div>

        </nav>

    );

}

export default Navbar;