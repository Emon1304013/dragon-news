import React from "react";
import { FaShare, FaBookmark, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleNews = ({ singleNews }) => {
  const {
    _id,
    author,
    details,
    image_url,
    rating,
    title,
    total_view,
  } = singleNews;
  const { img, name, published_date } = author;
  return (
    <div className="mb-4 mx-4">
      <div className=" rounded overflow-hidden border w-full bg-white mx-3 md:mx-0 lg:mx-0">
        <div className="w-full flex justify-between p-3 items-center">
          <div className="flex items-center gap-2">
            <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
              <img src={img} alt="profilepic" />
            </div>
            <div>
              <p className="pt-1 ml-2 font-bold text-sm">
                {name ? name : "No name found"}
              </p>
              <p className="ml-2 text-sm">{published_date?.slice(0, 10)}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <FaBookmark></FaBookmark>
            <FaShare></FaShare>
          </div>
        </div>
        <h2 className="text-center my-2 text-xl font-bold"> {title} </h2>
        <img className="w-full bg-cover" src={image_url} alt="" />
        <div className="px-3 pb-2">
          <div className="pt-2 flex justify-between">
            <div>
              <span className="text-gray-400 font-medium flex gap-2 items-center">
                <FaStar className="text-yellow-500"></FaStar> {rating.number}
              </span>
            </div>

            <div>
              <span className="text-gray-400 font-medium flex gap-2 items-center">
                <FaEye className="text-black"></FaEye> {total_view}
              </span>
            </div>

          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <p>
                {details.length > 200 ? (
                  <>
                    {details.slice(0, 200) + "..."}
                    <Link
                      className="underline text-blue-800 ml-2"
                      to={`/news/${_id}`}
                    >
                      Read More
                    </Link>
                  </>
                ) : (
                  details
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
