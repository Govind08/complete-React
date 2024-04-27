import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [name, setName] = useState('govind');
    const [blogs, setBlogs] = useState([
        { title: "Govind's blogs", body: "vashs as hasas shasasvh", author: "Govind", id: 1 },
        { title: "Ravi's blogs", body: "vashs as hasas shasasvh", author: "ravi", id: 2 },
        { title: "Monika's blogs", bpdy: "vashs as hasas shasasvh", author: "Monika", id: 3 },
        { title: "Monika's blogs", bpdy: "vashs as hasas shasasvh", author: "shayam", id: 4 }]);

    const handleDelete = (id) => {
        const newlog = blogs.filter((blog) => blog.id != id);
        setBlogs(newlog)
        setName('Monika')
    }
    useEffect(()=>{
        console.log("run use effect")
    },[name]);
    return (<div
        className="home">
        <BlogList blogs={blogs} title='All blog!' handleDelete={handleDelete} />
        <BlogList blogs={blogs.filter((blog) => blog.author == "Monika")} title='Monika blogs' handleDelete={handleDelete} />


    </div>);
}

export default Home;