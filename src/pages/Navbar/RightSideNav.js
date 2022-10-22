import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block mb-2">
        <Link>
          <FaGoogle className="inline"></FaGoogle> Login with google
        </Link>
      </button>

      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        <Link>
          <FaGithub className="inline"></FaGithub> Login with Github
        </Link>
      </button>

      <h2 className="my-4 ml-4 text-3xl font-semibold">Find Us On</h2>

      <div class="flex flex-col space-y-2">
        <button class="bg-transparent hover:bg-gray-400 border-blue-500 hover:border-transparent rounded border text-gray-800 font-bold py-2 px-4 rounded-l">
        <FaFacebook className="inline"></FaFacebook> Facebook
        </button>
        <button class="bg-transparent hover:bg-gray-400 border-blue-500 hover:border-transparent rounded border text-gray-800 font-bold py-2 px-4 rounded-l">
        <FaWhatsapp className="inline"></FaWhatsapp> WhatsApp
        </button>
        <button class="bg-transparent hover:bg-gray-400 border-blue-500 hover:border-transparent rounded border text-gray-800 font-bold py-2 px-4 rounded-l">
        <FaTwitter className="inline"></FaTwitter> Twitter
        </button>
        <button class="bg-transparent hover:bg-gray-400 border-blue-500 hover:border-transparent rounded border text-gray-800 font-bold py-2 px-4 rounded-r">
        <FaTwitch className="inline"></FaTwitch> Twitch
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
