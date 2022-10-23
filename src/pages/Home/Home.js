import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import SingleNews from "../SingleNews/SingleNews";

const Home = () => {
  const user = useContext(AuthContext);
  const allNews = useLoaderData();
  return (
    <div>
      {allNews.map((singleNews) => (
        <SingleNews 
        key={singleNews._id} 
        singleNews={singleNews}
        >
            
        </SingleNews>
      ))}
    </div>
  );
};

export default Home;
