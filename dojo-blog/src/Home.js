import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";
const Home = () => {
    const {data:blogs,previewMgs,errorMgs}= useFetch('http://localhost:8000/blogs');
   
    return (<div
        className="home">
            {previewMgs && <div>{errorMgs}</div>}
        {blogs && <BlogList blogs={blogs} title='All blog!' />}

    </div>);
}

export default Home;