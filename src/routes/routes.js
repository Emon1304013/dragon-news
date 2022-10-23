import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import NewsDetail from "../pages/NewsDetail/NewsDetail";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('https://dragon-news-server-two-flax.vercel.app/category/08')
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/blog',
            element:<PrivateRoute><Blog></Blog></PrivateRoute>
          },
          {
            path:'/register',
            element:<SignUp></SignUp>
          },
          {
            path:'/category/:id',
            element:<Category></Category>,
            loader:({params})=> fetch(`https://dragon-news-server-two-flax.vercel.app/category/${params.id}`)
          },
          {
            path:'/news/:id',
            element:<PrivateRoute><NewsDetail></NewsDetail></PrivateRoute>,
            loader:({params}) => fetch(`https://dragon-news-server-two-flax.vercel.app/news/${params.id}`)
          }
      ]
      }
    ]
  );
export default router;