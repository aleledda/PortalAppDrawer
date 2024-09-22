import '../assets/css/Componenti/Questionario.css'
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

function Questionario({ indice, scorriQuestionarioIndice, preventivo }) {
    var QuestionarioObj = [
        {
            id: 1,
            corpo: "Vuoi sviluppare un applicazione nativa o web app?",
            risposte: [{ testo: "Nativa", score: 10000 }, { testo: "Web app", score: 7000 }]
        },
        {
            id: 2,
            corpo: "L'applicazione deve connettersi a servizi di API terze?",
            risposte: [{ testo: "Si", score: 1000 }, { testo: "No", score: 0 }]
        },
        {
            id: 3,
            corpo: "L'applicazione deve memorizzare dati e questi dati devono essere sincronizzati su pi&ugrave; dispositivi? (Presenza database)",
            risposte: [{ testo: "Si", score: 5000 }, { testo: "No", score: 1000 }]
        },
        {
            id: 4,
            corpo: "L'applicazione deve gestire diversi account? (es. login e sessioni)",
            risposte: [{ testo: "Si", score: 3000 }, { testo: "No", score: 0 }]
        },
        {
            id: 5,
            corpo: "L'applicazione deve gestire un interfaccia multi lingua?",
            risposte: [{ testo: "Si", score: 2000 }, { testo: "No", score: 0 }]
        },
        {
            id: 6,
            corpo: "Si tratta di un applicazione globale o privata?",
            risposte: [{ testo: "Globale", score: 2000 }, { testo: "Privata", score: 1000 }]
        }]

    return (
        <div key={indice} className="QuestionarioFrame" >
            {
                indice == QuestionarioObj.length ? <p>Il tuo preventivo e' è: { preventivo }</p>:
                    <div>
                        <p className="QuestionarioText">{QuestionarioObj[indice].corpo}</p>
                        <div>
                            {
                                // rappresento la scelta sotto forma di btn
                                QuestionarioObj[indice].risposte.map((obj) => (<button id={`button${obj.score}`} value={obj.score} onClick={scorriQuestionarioIndice}>{obj.testo}</button>))
                            }
                        </div>
                    </div>
            }
        </div>
    );
}

export default Questionario;