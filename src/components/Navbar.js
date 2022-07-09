import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const newBlogBtn = {
        backgroundColor: "#5e68f3",
        color: "white",
        borderRadius: "5px",
        padding: "10px 40px",
    };
    return (
        <nav className="navbar">
            <h1>The React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={newBlogBtn}>
                    New Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
