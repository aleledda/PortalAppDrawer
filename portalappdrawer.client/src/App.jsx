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

    return (
        <>
            <div>
                <ToastContainer position="top-center" limit="1" />
            </div>

            <div className="AllElements">
                <h1>Benvenuto su PAD</h1>
                { /*Richiamo le icone per le App */}
                <div className="AppComponent">
                    {
                        application.map((app) => (
                            <ApplicationElement
                                key={app.id}
                                nome={app.nome}
                                icona={app.icona}
                                goto={app.goto}
                                active={app.active}
                                versione={app.versione}
                                descrizione={app.descrizione}>
                                
                            </ApplicationElement>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default App;