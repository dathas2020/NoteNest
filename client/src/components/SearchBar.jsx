import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {

    return (

        <div className="relative mb-8">

            <Search
                size={18}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-500
                    pointer-events-none
                "
            />

                <input
                    type="text"
                    placeholder="Search notes by title, subject or topic..."
                    value={value}
                    onChange={onChange}
                    className="
                        w-full
                        bg-[#141821]
                        border
                        border-[#2A3142]
                        rounded-xl
                        pl-12
                        pr-5
                        py-3
                        text-white
                        placeholder:text-slate-500
                        focus:outline-none
                        focus:border-violet-500
                        transition
                    "
                />

        </div>

    );

}

export default SearchBar;