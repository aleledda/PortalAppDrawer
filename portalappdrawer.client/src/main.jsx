import App from './App.jsx'
import './assets/css/index.css'
import store from './Redux/Store'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import InstagramWatchdog from "./Pagine/InstagramWatchdog.jsx"
import VeicoloWatchdog from "./Pagine/VeicoloWatchdog.jsx"
import SidenavWatchdog from "./Pagine/SidenavTemplate.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/InstagramWatchdog",
        element: <InstagramWatchdog></InstagramWatchdog>,
    },
    {
        path: "/SidenavTemplate",
        element: <SidenavWatchdog></SidenavWatchdog>,
    },
    {
        path: "/VeicoloWatchdog",
        element: <VeicoloWatchdog></VeicoloWatchdog>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    </React.StrictMode>
);