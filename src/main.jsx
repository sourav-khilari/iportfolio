import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './component/ErrorPage.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Project from './component/Project.jsx'
import Contact from './component/Contact.jsx'
import Console from './component/terminal/Consol.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "project",
        element: <Project />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ],
  },
  {
    path: "/console",
    element: <Console />,
    errorElement: <ErrorPage />,

    // children:[

    // ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
