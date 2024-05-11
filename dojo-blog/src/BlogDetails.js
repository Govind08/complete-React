import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, previewMgs, errorMgs } = useFetch("http://localhost:8000/blogs/" + id);
const history = useHistory();
    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, { method: 'DELETE' }).
            then(() => {
                console.log("Deleted");
                history.push('/');
            })
    }
    return (<div className="blog-details">
        {previewMgs && <div>{errorMgs}</div>}
        {blog && (
            <article>
                <h1>{blog.title}</h1>
                <p>Written By - {blog.author}</p>
                <p>{blog.body}</p>
        <button onClick={handleClick}>Delete Blog</button>

            </article>)}
    </div>);
}

export default BlogDetails;