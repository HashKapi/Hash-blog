import { useParams } from "react-router";
import useFetch from "../Smart Components/useFetch";
import HandleClick from "../Smart Components/DeleteHandler";
import { useHistory } from "react-router";

const BlogDetails = () => {
    const {id} = useParams()
    const url = "http://localhost:8000/blogs/"+id

    const {data:blog, error, isPending} = useFetch(url)
    const history = useHistory()

    return (  
        <div className="blog-details">
            {isPending && <div>is loading...</div>}
            {error && <div>{error}</div>}
            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={() => HandleClick(url, history)}>delete</button>
                </article>
            }
        </div>
    );
}
 
export default BlogDetails;