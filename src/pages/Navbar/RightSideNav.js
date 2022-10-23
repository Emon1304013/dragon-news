import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

import { AuthContext } from "../../contexts/UserContext";


const RightSideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {googleSignIn} = useContext(AuthContext)

  const handleLoginWIthGoogle = () => {
    googleSignIn().then(result => {
      console.log(result.user)
      navigate(from, { replace: true })
    })
  };
  return (
    <div>
      <Link onClick={handleLoginWIthGoogle}>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block mb-2">
          <FaGoogle className="inline"></FaGoogle> Login with google
        </button>
      </Link>

      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        <Link>
          <FaGithub className="inline"></FaGithub> Login with Github
        </Link>
      </button>

      <h2 className="my-4 ml-4 text-3xl font-semibold">Find Us On</h2>

      <div className="flex flex-col space-y-2">
        <button className="bg-transparent hover:bg-gray-400 border-blue-500 hover:border-transparent rounded border text-gray-800 font-bold py-2 px-4 rounded-l">
          <FaFacebook className="inline"></FaFacebook> Facebook
        </button>
        <button className="bg-transparent hover:bg-gray-400 border-blue-500 hover:border-transparent rounded border text-gray-800 font-bold py-2 px-4 rounded-l">
          <FaWhatsapp className="inline"></FaWhatsapp> WhatsApp
        </button>
        <button className="bg-transparent hover:bg-gray-400 border-blue-500 hover:border-transparent rounded border text-gray-800 font-bold py-2 px-4 rounded-l">
          <FaTwitter className="inline"></FaTwitter> Twitter
        </button>
        <button className="bg-transparent hover:bg-gray-400 border-blue-500 hover:border-transparent rounded border text-gray-800 font-bold py-2 px-4 rounded-r">
          <FaTwitch className="inline"></FaTwitch> Twitch
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
