import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import SingleBlog from "../Pages/SingleBlog";
import BookMarks from "../Pages/BookMarks";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index:true,
        Component:Home,
      },
      {
        path: '/blog',
        loader:() =>fetch('https://dev.to/api/articles?per_page=20&top=7'),
        Component: Blog,
      },
      {
        path:'/blog/:id',
        loader:({params}) =>fetch(`https://dev.to/api/articles/${params.id}`),
        Component:SingleBlog,
        children:[
            {
                index:true,
                Component:Content
            },
            {
                path:'author',
                Component:Author
            }
        ]
      },
      {
        path: '/bookMark',
        Component: BookMarks,
      }
    ]
  },
]);