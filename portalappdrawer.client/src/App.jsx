import { useEffect, useState, useContext } from 'react'
import React from 'react'
import './assets/css/App.css'
import ApplicationElement from "./Componenti/AppComponent"
import { useSelector } from "react-redux"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {
    const application = useSelector((state) => state.application.value);
    console.log(application);

    const handleMouseOverVersion = () => {
        toast.info("Info Notification !", {
            position: "bottom-center"
        });
        toast("Default Notification !");
    };

    return (
        <>
            <div className="AllElements">
                <h1>Benvenuto su PAD</h1>
                { /*Richiamo le icone per le App */}
                <div className="AppComponent" onMouseOver={handleMouseOverVersion}>
                    {
                        application.map((app) => (
                            <ApplicationElement
                                key={app.id}
                                nome={app.nome}
                                icona={app.icona}
                                goto={app.goto}
                                active={app.active}>
                                {/* {app.descrizione}
                                {app.versione} */}
                                
                            </ApplicationElement>
                        ))
                    }
                </div>
            </div>
            
        </>
    );
}

export default App;