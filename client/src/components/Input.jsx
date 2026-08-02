function Input({
    type = "text",
    name,
    placeholder,
    value,
    onChange,
}) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="
                w-full
                h-11
                px-4
                rounded-lg
                bg-[#181A23]
                border
                border-gray-700
                focus:border-violet-500
                focus:outline-none
                transition
                text-white
                placeholder:text-gray-500
            "
        />
    );
}

export default Input;