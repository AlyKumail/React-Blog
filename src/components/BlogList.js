import { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, category, title }) => {
    // const [notFound, setNotFound] = useState(true);
    let filteredBlogs;
    if (category !== "all") {
        console.log("Category SET:", category);
        filteredBlogs = blogs.filter((blog) => blog.category == category);
    } else {
        filteredBlogs = blogs;
        // setNotFound(false);
    }

    const isNotFound = () => {
        if (filteredBlogs.length > 0) return false;
        return true;
    };
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {isNotFound() && <h4 className="not-found">Blog Not Found</h4>}
            <div className="blog-wrapper">
                {filteredBlogs &&
                    filteredBlogs.map((blog) => (
                        <div className="blog-preview" key={blog.id}>
                            <Link to={`/blog/${blog.id}`}>
                                <h2>
                                    {blog.title}{" "}
                                    <span className="blog-category">
                                        {blog.category}
                                    </span>
                                </h2>
                                <p>{blog.author}</p>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default BlogList;
