import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import RecipeGetage from './app/features/trying-http-requests/get';
import RecipeRemoval from './app/features/trying-http-requests/delete';
import RecipePutage from './app/features/trying-http-requests/put';
import RecipePostage from './app/features/trying-http-requests/post';
import BarritaAlta from './app/features/topbar/topbar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/list",
    element: <RecipeGetage />,
  },
  {
    path: "/add",
    element: <RecipePostage />,
  },
  {
    path: "/del",
    element: <RecipeRemoval />,
  },
  {
    path: "/upd",
    element: <RecipePutage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div>
        <BarritaAlta />
      </div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);


reportWebVitals();
