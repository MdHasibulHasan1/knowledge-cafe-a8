import React from "react";

const SingleBookMarked = ({ blog }) => {
  return (
    <div>
      <h1 className="text-left p-2 rounded-md bg-white m-2">{blog.title}</h1>
    </div>
  );
};

export default SingleBookMarked;
