import {
    FileText,
    Search,
    UploadCloud,
    Users
} from "lucide-react";

function Features() {

    const features = [

        {
            icon: <FileText className="text-violet-400" size={28} />,
            title: "PDF Resources",
            description:
                "Upload and organize study materials in one place."
        },

        {
            icon: <Search className="text-violet-400" size={28} />,
            title: "Quick Search",
            description:
                "Find notes instantly using titles and subjects."
        },

        {
            icon: <UploadCloud className="text-violet-400" size={28} />,
            title: "Easy Upload",
            description:
                "Share your notes with just a few clicks."
        },

        {
            icon: <Users className="text-violet-400" size={28} />,
            title: "Community Driven",
            description:
                "Learn from resources shared by fellow students."
        }

    ];

    return (

        <section className="py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-14">

                    <h2 className="text-4xl font-bold">

                        Why NoteNest?

                    </h2>

                    <p className="text-slate-400 mt-3">

                        Everything you need to manage and discover study resources.

                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((feature) => (

                        <div
                            key={feature.title}
                            className="
                                bg-[#141821]
                                border
                                border-[#2A3142]
                                rounded-2xl
                                p-6
                                hover:border-violet-500
                                transition-all
                                duration-300
                            "
                        >

                            <div className="mb-5">

                                {feature.icon}

                            </div>

                            <h3 className="text-xl font-semibold mb-2">

                                {feature.title}

                            </h3>

                            <p className="text-slate-400">

                                {feature.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Features;