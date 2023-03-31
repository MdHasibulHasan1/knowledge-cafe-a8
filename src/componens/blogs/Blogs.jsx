import React from 'react';
import { useEffect, useState } from 'react';

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
                blogs.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;