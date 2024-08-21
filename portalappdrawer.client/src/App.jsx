import { useEffect, useState, useContext} from 'react'
import './assets/css/App.css'
import ApplicationElement from "./Componenti/AppComponent"
import { useSelector } from "react-redux"

function App() {
    const application = useSelector((state) => state.application.value);
    console.log(application);

    return (
        <>
            <h1>Benvenuto su PAD</h1>
            { /*Richiamo le icone per le App */}
            <div className="gap-5 grid grid-cols-4">
                {
                    application.map((app) => (
                        <ApplicationElement
                            key={app.id}
                            nome={app.nome}
                            icona={app.icona}>
                            {app.descrizione}
                            {app.versione}
                        </ApplicationElement>
                    ))
                }
            </div>
        </>
    );
}

export default App;