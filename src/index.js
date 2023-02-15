import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import RecipeList from './app/http/get';
import RecipeRemoval from './app/http/delete';
import RecipePutage from './app/http/put';
import RecipePostage from './app/http/post';
import BarritaAlta from './app/features/topbar/topbar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/list",
    element: <RecipeList />,
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
