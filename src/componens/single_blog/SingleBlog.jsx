import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = ({ blog, handleBookmark, addMin }) => {
  const { author_name, readTime, title, id, publishDate, images } = blog;
  return (
    <div className="rounded-sm shadow-lg p-3">
      <img
        className="w-full rounded-lg md:h-72 lg:h-auto"
        src={images.cover}
        alt=""
      />
      <div className="flex justify-between h-22 items-center">
        <div className="flex gap-2 h-20 items-center">
          <div className="mr-2">
            <img
              className="w-16 h-16 rounded-full"
              src={images.author}
              alt="image not found"
            />
          </div>
          <div className="text-left">
            <h3>{author_name}</h3>
            <p>{publishDate}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center h-10">
          <h3 className="mr-2">{readTime}</h3>
          <span onClick={() => handleBookmark(blog)}>
            <FontAwesomeIcon icon={faBookmark} />
          </span>
        </div>
      </div>
      <div className="text-left">
        <h1 className=" font-semibold text-3xl">{title}</h1>
        <p className="my-2">#beginners #programming</p>
        <button
          onClick={() => addMin(parseFloat(readTime))}
          className="underline text-blue-800"
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
};
export default SingleBlog;
