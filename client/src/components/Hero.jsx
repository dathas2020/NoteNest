import { Link } from "react-router-dom";
import {
    FileText,
    Search,
    UploadCloud
} from "lucide-react";

function Hero() {

    return (

        

        <section
            className="
                relative
                overflow-hidden
                min-h-[calc(100vh-64px)]
                flex
                items-center
                justify-center
                px-6
            "
        >
            <div
                className="
                    absolute
                    w-[500px]
                    h-[500px]
                    bg-violet-600/20
                    blur-[140px]
                    rounded-full
                    pointer-events-none
                "
            />

            <div className="max-w-4xl text-center">

                <p className="uppercase tracking-[0.3em] text-violet-400 font-semibold">

                    Welcome to NoteNest

                </p>

                <h1
                    className="
                        mt-4
                        text-6xl
                        font-bold
                        leading-tight
                    "
                >
                    Share and discover
                    <br />
                    <span className="text-violet-400">
                        study resources.
                    </span>
                </h1>

                <p
                    className="
                        mt-6
                        text-xl
                        text-slate-400
                        max-w-2xl
                        mx-auto
                    "
                >
                    Join a collaborative community where students upload,
                    organize and access high-quality notes from different subjects.
                </p>

                <div
                    className="
                        mt-10
                        flex
                        justify-center
                        gap-4
                    "
                >

                    <Link
                        to="/notes"
                        className="
                            bg-violet-600
                            hover:bg-violet-500
                            transition
                            px-6
                            py-3
                            rounded-xl
                            font-medium
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-lg
                        "
                    >
                        Browse Notes
                    </Link>

                    <Link
                        to="/register"
                        className="
                            border
                            border-[#2A3142]
                            hover:border-violet-500
                            transition
                            px-6
                            py-3
                            rounded-xl
                            font-medium
                            transition-all
                            duration-300
                            hover:-translate-y-1
                        "
                    >
                        Get Started
                    </Link>

                </div>

                <div
                    className="
                        mt-16
                        flex
                        justify-center
                        gap-10
                        text-slate-400
                    "
                >

                    <div className="flex items-center gap-2">
                        <FileText size={18} />
                        PDF Notes
                    </div>

                    <div className="flex items-center gap-2">
                        <Search size={18} />
                        Fast Search
                    </div>

                    <div className="flex items-center gap-2">
                        <UploadCloud size={18} />
                        Secure Uploads
                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;