import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>404 Page didn't found</p>
            <Link to="/">Go back to Home Page</Link>
        </div>
    );
};

export default NotFound;
