import { useState } from "react";
import { useHistory } from "react-router-dom";
import SubmitHandler from "../Smart Components/SubmitHandler";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('yoshi')
    const [isPending, setIsPending] = useState(false)
    
    const history = useHistory()

    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={e => SubmitHandler(e,history,title,body,author,setIsPending)}>
                <label>Blog title:</label>
                <input 
                    value={title}
                    type="text" 
                    required
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    value={body}
                    required
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select 
                    value={author} 
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="yoshi">yoshi</option>
                    <option value="mario">mario</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
    );
}
 
export default Create;