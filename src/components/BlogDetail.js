import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetail = () => {
    const { id } = useParams();
    const history = useHistory();

    const {
        data: blog,
        isLoading,
        error,
    } = useFetch("http://localhost:8000/blogs/" + id);

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
        }).then(() => {
            console.log("Blog deleted");
            history.push("/");
        });
    };

    return (
        <div className="content blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button
                        onClick={() => {
                            handleDelete(blog.id);
                        }}
                    >
                        Delete Blog
                    </button>
                </article>
            )}
        </div>
    );
};

export default BlogDetail;
