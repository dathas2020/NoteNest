function Input({
    type = "text",
    name,
    placeholder,
    value,
    onChange
}) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{
                width: "100%",
                padding: "10px",
                marginBottom: "12px",
                boxSizing: "border-box"
            }}
        />
    );
}

export default Input;