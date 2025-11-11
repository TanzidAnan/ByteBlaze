import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import BookMarks from './Pages/BookMarks.jsx';
import MainLayout from './Layouts/MainLayout.jsx';

const router = createBrowserRouter([
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
        path: '/bookMark',
        Component: BookMarks,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
