import '../assets/css/Componenti/Questionario.css'
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

function Questionario({ indice, scorriQuestionarioIndice, preventivo }) {
    var QuestionarioObj = [
        {
            id: 1,
            corpo: `Benvenuto nel sistema di generazione di preventivi per un prodotto software.
                    Ti verranno fatte alcune domande per capire l'efort che il tuo progetto potrebbe richiedere in fase di svluppo.`,
            risposta: ["Avanti"]
        },
        {
            id: 2,
            corpo: "Vuoi sviluppare un applicazione nativa o web app?",
            risposte: [{ testo: "Nativa", score: 10000 }, { testo: "Web app", score: 7000 }]
        },
        {
            id: 3,
            corpo: "L'applicazione deve connettersi a servizi di API terze?",
            risposte: [{ testo: "Si", score: 1000 }, { testo: "No", score: 0 }]
        },
        {
            id: 4,
            corpo: "L'applicazione deve memorizzare dati e questi dati devono essere sincronizzati su pi\u00F9 dispositivi? (Presenza database)",
            risposte: [{ testo: "Si", score: 5000 }, { testo: "No", score: 1000 }]
        },
        {
            id: 5,
            corpo: "L'applicazione deve gestire diversi account? (es. login e sessioni)",
            risposte: [{ testo: "Si", score: 3000 }, { testo: "No", score: 0 }]
        },
        {
            id: 6,
            corpo: "L'applicazione deve gestire un interfaccia multi lingua?",
            risposte: [{ testo: "Si", score: 2000 }, { testo: "No", score: 0 }]
        },
        {
            id: 7,
            corpo: "Si tratta di un applicazione globale o privata?",
            risposte: [{ testo: "Globale", score: 2000 }, { testo: "Privata", score: 1000 }]
        }]

    return (
        <div key={indice} className="QuestionarioFrame">
            {
                // mostro in caso sia il primo elemento il messaggio di presentazione
                indice == 0 ?
                    <div>
                        <p className="QuestionarioText">{QuestionarioObj[indice].corpo}</p>
                        <div className="containerButtonAvanti">
                            <button id='buttonAvantiQuestionario' className="btn btn-secondary" value="0" onClick={scorriQuestionarioIndice}>{QuestionarioObj[indice].risposta}</button>
                        </div>
                    </div>
                    :
                    // inizio a scorrere gli elementi del questionario, lettere accentate e simboli vanno gestiti in unicode
                    indice == QuestionarioObj.length ?
                        <div className="containerPreventivo">
                            <p className="labelDescrizionePreventivo">Il tuo preventivo {"\u00E8"}: </p> <p className="labelPreventivo">{preventivo + "\u20AC"}</p>
                        </div>
                        :
                        <div>
                            <p className="QuestionarioText">{QuestionarioObj[indice].corpo}</p>
                            <div className="containerButtonResponse">
                            {
                                // rappresento la scelta sotto forma di btn
                                    QuestionarioObj[indice].risposte.map((obj) => (<button id={`button${obj.score}`} className="btn btn-lg btn-outline-success" value={obj.score} onClick={scorriQuestionarioIndice}>{obj.testo}</button>))
                            }
                            </div>
                        </div>
            }
        </div>
    );
}

export default Questionario;