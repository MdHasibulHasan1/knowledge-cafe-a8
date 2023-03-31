import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = ({ blog, handleBookmark, addMin }) => {
  const { author, readTime, title, id, images } = blog;
  return (
    <div>
      <div className="rounded-sm p-3">
        <img
          className="w-full rounded-lg md:h-72 lg:h-auto"
          src={images.cover}
          alt=""
        />
        <div className="flex justify-between h-22 items-center">
          <div className="flex gap-2 h-20 items-center">
            <div>
              <img
                className="w-16 h-16 rounded-full"
                src={images.author}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-left">{author}</h3>
              <p>Mar 14 (4 Days ago)</p>
            </div>
          </div>
          <div className="flex gap-2 items-center h-10">
            <h3 className="">{readTime}</h3>
            <span onClick={() => handleBookmark(blog)}>
              <FontAwesomeIcon icon={faBookmark} />
            </span>
          </div>
        </div>
        <div className="text-left">
          <h1 className=" font-bold text-4xl">{title}</h1>

          <button
            onClick={() => addMin(parseFloat(readTime))}
            className="underline text-blue-800"
          >
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
};
export default SingleBlog;
