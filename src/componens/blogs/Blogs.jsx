import React from "react";
import { useEffect, useState } from "react";

import BookMark from "../BookMark/BookMark";
import Header from "../Header/Header";
import SingleBlog from "../single_blog/SingleBlog";
import Toastify from "../Toastify/Toastify.jsx";
//

const Blogs = () => {
  const [isExist, setIsExist] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [markedBlogs, setMarkedBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="md:flex ">
        <div className="md:w-8/12">
          {blogs.map((blog) => (
            <SingleBlog
              addMin={addMin}
              handleBookmark={handleBookmark}
              key={blog.id}
              blog={blog}
            ></SingleBlog>
          ))}
        </div>
        <div className="md:w-4/12 inline ">
          <BookMark min={min} markedBlogs={markedBlogs}></BookMark>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
