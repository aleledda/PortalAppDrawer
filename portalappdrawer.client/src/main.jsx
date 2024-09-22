import App from './App.jsx'
import './assets/css/index.css'
import store from './Redux/Store'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SidenavSample from "./Pagine/SidenavTemplate.jsx"
import Preventivo from "./Pagine/Preventivo.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/SidenavTemplate",
        element: <SidenavSample/>,
    },
    {
        path: "/Preventivo",
        element: <Preventivo/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    </React.StrictMode>
);