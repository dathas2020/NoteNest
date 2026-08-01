function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Search notes..."
            value={value}
            onChange={onChange}
        />
    );
}

export default SearchBar;