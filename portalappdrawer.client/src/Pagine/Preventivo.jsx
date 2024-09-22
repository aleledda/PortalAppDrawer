import GoBack from '../Componenti/GotoAppDrawer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modale from '../Componenti/Modale'
import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import ApplicationElement from "../Componenti/AppComponent"
import Questionario from '../Componenti/Questionario'

function Preventivo() {
    // Definisco lo state per il modale
    const [modalShow, setModalShow] = useState(false);
    // Definisco lo state per gestire l'avanzamento del questionario
    const [count, setCount] = useState(0);
    // Definisco lo state per gestire l'incremento del preventivo
    const [preventivo, setPreventivo] = useState(0);
    
    const scorriQuestionarioIndice = (event) => {
        // scorro le domande
        setCount(count + 1);
        // impostazione incrementale per il preventivo
        setPreventivo((preventivo) => preventivo + parseFloat(event.target.value));
    };

    const resetFunction = () => {
        // reset count e preventivo
        setCount((count) => count = 0);
        setPreventivo((preventivo) => preventivo = 0);
    }

    // Creo l'oggetto per il modale
    const modale = {
        key: "modalePreventivo",
        titolo: (
            <>
                {/*Titolo personalizzato in base al indice*/ }
                { count == 0 ? <p>Primi passi</p> : <p>Calcolo preventivo...</p> }
            </>
        ),
        sottoTitolo: (
            <>
                {/*Sotto titolo personalizzato in base al indice*/}
                {count == 7 ? <p></p> : count == 0 ? <p>Fase preliminare...</p> : <p>Domanda {count - 1} di 6</p>}
            </>
        ),
        corpo: (
            <div>
                <Questionario indice={count} scorriQuestionarioIndice={scorriQuestionarioIndice} preventivo={ preventivo } />
            </div>
        ),
        azioni: [
            <Button key='1' className="btn btn-light btn-outline-success" onClick={ resetFunction }>Reset</Button>
        ],
    };

    return (
        <>
            <h1 className="text-3x1 p-8 font-bold">Ottieni il tuo preventivo gratuito</h1>
            {/*Bottone se cliccato apre il modale */}
            <button type="button" className="btn btn-light btn-lg" onClick={() => setModalShow(true)}>Inizia</button>
            <GoBack></GoBack>
            {/*Componente modale centrato al centro della pagina */ }
            <Modale show={modalShow} onHide={() => setModalShow(false)} modale={modale} />
        </>
    );
}
export default Preventivo;