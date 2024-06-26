import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {
    // const {id} =useParams()
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        // console.log(blog);
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log("New blog added")
                setIsPending(false);
                // history.go(-1);
                history.push('/');
            });
    }
    return (
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>blog title</label>
                <input type="text" required value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <label>Blog boay</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='Govind'>Govind</option>
                    <option value="Monika">Monika</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            </form>
        </div>

    );
}

export default Create;