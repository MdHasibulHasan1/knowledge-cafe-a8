import React from 'react';
import { useEffect, useState } from 'react';
import SingleBlog from '../singleBlog/SingleBlog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
      fetch('data.json')
    .then(res=>res.json())
    .then(data => setBlogs(data))
      
    }, [])

    return (
        <div>
            <h1>hadsfld</h1>
            {
                blogs.map(blog => <SingleBlog></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;