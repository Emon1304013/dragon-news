import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleNews from "../SingleNews/SingleNews";

const Category = () => {
  // const [categoryNews,setCategoryNews] = useState([]);
  const categoryNews = useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      <h2 className="mb-4">This is category {categoryNews.length}</h2>
      {categoryNews.map((singleNews) => (
        <SingleNews key={singleNews._id} singleNews={singleNews}>
          {singleNews.title}
        </SingleNews>
      ))}
    </div>
  );
};

export default Category;
