import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = (props) => {
    const {
        data: blogs,
        isLoading,
        error,
    } = useFetch("http://localhost:8000/blogs");

    const Ctitle =
        props.category.toString()[0].toUpperCase() +
        props.category.split("").slice(1).join("") +
        " Blogs";
    console.log(Ctitle);

    return (
        <div className="content">
            <div className="home">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {blogs && (
                    <BlogList
                        blogs={blogs}
                        category={props.category}
                        title={Ctitle}
                    ></BlogList>
                )}
            </div>
        </div>
    );
};

export default Home;
