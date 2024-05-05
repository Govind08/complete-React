import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog,previewMgs,errorMgs} = useFetch("http://localhost:8000/blogs/"+ id )
    return ( <div className="blog-detail">
        {previewMgs && <div>{errorMgs}</div>}
        {blog && (
        <article>
            <h1>{blog.title}</h1>
            <p>Written By - {blog.author}</p>
            <p>{blog.body}</p>
        </article>)}
    </div> );
}
 
export default BlogDetails;