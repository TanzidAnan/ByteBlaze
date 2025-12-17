import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Routes.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: MainLayout,
//     children: [
//       {
//         index:true,
//         Component:Home,
//       },
//       {
//         path: '/blog',
//         loader:() =>fetch('https://dev.to/api/articles?per_page=20&top=7'),
//         Component: Blog,
//       },
//       {
//         path:'/blog/:id',
//         loader:({params}) =>fetch(`https://dev.to/api/articles/${params.id}`),
//         Component:SingleBlog
//       },
//       {
//         path: '/bookMark',
//         Component: BookMarks,
//       }
//     ]
//   },
// ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
