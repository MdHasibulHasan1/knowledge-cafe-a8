import React from "react";
import SingleBookMarked from "../singleBookMarked/SingleBookMarked";

const BookMark = ({ markedBlogs, min }) => {
  //   console.log(markedBlogs);

  return (
    <div className="pt-3 sticky top-0 shadow-md">
      <h1 className="p-3 bg-blue-300 rounded-lg mb-3 border-2 border-blue-700">
        Spent time on read : {min} min
      </h1>
      <div className="bg-gray-200 py-3.5 rounded-md">
        <h1>Bookmarked Blogs : {markedBlogs.length}</h1>
        {markedBlogs.map((blog) => (
          <SingleBookMarked key={blog.id} blog={blog}></SingleBookMarked>
        ))}
      </div>
    </div>
  );
};

export default BookMark;
