import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer
            className="
                border-t
                border-[#2A3142]
                py-8
                px-6
                mt-20
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-center
                    gap-4
                "
            >

                <div>

                    <h2 className="text-xl font-bold text-violet-400">
                        NoteNest
                    </h2>

                    <p className="text-slate-400 mt-1">
                        Share. Learn. Grow.
                    </p>

                </div>

                <div className="flex items-center gap-6">

                    <Link
                        to="/notes"
                        className="text-slate-400 hover:text-white transition"
                    >
                        Browse Notes
                    </Link>

                    <Link
                        to="/login"
                        className="text-slate-400 hover:text-white transition"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="text-slate-400 hover:text-white transition"
                    >
                        Register
                    </Link>

                </div>

            </div>

            <p
                className="
                    text-center
                    text-slate-500
                    text-sm
                    mt-8
                "
            >
                © {new Date().getFullYear()} NoteNest. Built for students.
            </p>

        </footer>

    );

}

export default Footer;