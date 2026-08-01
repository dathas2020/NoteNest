function Button({ children, type = "button", onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            style={{
                padding: "10px 18px",
                cursor: "pointer",
                borderRadius: "6px",
                border: "none"
            }}
        >
            {children}
        </button>
    );
}

export default Button;