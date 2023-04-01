import React from "react";
import { useEffect, useState } from "react";
import BookMark from "../BookMark/BookMark";
import Header from "../Header/Header";
import Questions from "../Questions/Questions";
import SingleBlog from "../single_blog/SingleBlog";
import Toastify from "../Toastify/Toastify";
import { toast } from "react-toastify";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [markedBlogs, setMarkedBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookmark = (blog) => {
    // console.log(blog.id);
    const isMarked = markedBlogs.find(
      (markedBlog) => markedBlog.id === blog.id
    );
    if (isMarked) {
      toast.warning("You Have Already Bookmarked This Blog");
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "You Have Already Bookmarked This Blog",
      //   footer: '<a href="">Why do I have this issue?</a>',
      // });
    } else {
      const newMarkedBlogs = [...markedBlogs, blog];
      setMarkedBlogs(newMarkedBlogs);
    }
  };

  //   calculate min
  const [min, setMin] = useState(0);
  const addMin = (readTime) => {
    const totalMin = min + readTime;
    setMin(totalMin);
  };

  return (
    <div>
      <Toastify></Toastify>
      <Header></Header>
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
        <div className="md:w-4/12 mx-2 inline ">
          <BookMark min={min} markedBlogs={markedBlogs}></BookMark>
        </div>
      </div>
      <Questions></Questions>
    </div>
  );
};

export default Blogs;
