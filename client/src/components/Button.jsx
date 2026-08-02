function Button({
    children,
    type = "button",
    onClick,
    className = "",
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                h-11
                px-5
                rounded-lg
                bg-violet-600
                hover:bg-violet-700
                transition
                duration-200
                text-white
                font-medium
                shadow-md
                hover:shadow-xl
                ${className}
            `}
        >
            {children}
        </button>
    );
}

export default Button;