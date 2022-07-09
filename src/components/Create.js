import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("mario");
    const [body, setBody] = useState("");
    const [category, setCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const histroy = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, category, body, author };
        setIsLoading(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("blog added");
            setIsLoading(false);

            histroy.push("/");
        });
    };

    return (
        <div className="create">
            <h1>Create a new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <label>Blog Category</label>

                <select
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                >
                    <option value="tech">Tech</option>
                    <option value="sports">Sports</option>
                    <option value="health">Health</option>
                    <option value="politics">Politics</option>
                </select>
                <label>Blog Body</label>
                <textarea
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}
                    required
                ></textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {isLoading ? (
                    <button disabled>Adding blog...</button>
                ) : (
                    <button type="submit">Add Blog</button>
                )}
            </form>
        </div>
    );
};

export default Create;
