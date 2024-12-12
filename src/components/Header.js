import { useState } from "react";

const Header = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        if (onSearch) {
            onSearch(event.target.value);
        }
    };

    return (
        <header
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign:"center",
                padding: "10px 20px",
                backgroundColor: "#f4f4f4",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
        >
              <div style={{ flex: 1, marginLeft: "20px", position: "relative" }}>
                <input
                    type="text"
                    placeholder="Search for countries.."
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{
                        width: "700px",
                        padding: "10px",
                        border: "1px solid black",
                        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                        outline: "none",
                    }}
                />
            </div>
        </header>
    )}

    export default Header;