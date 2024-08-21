import '../assets/css/Componenti/AppComponent.css';
import { useSelector } from "react-redux";

function App({ key, nome, icona, versione }) {
    return (
        <>
            <div key={key} className="text-red-500" style={{ backgroundColor: "grey" }}>
                <img src={icona} alt="" style={{ width: "100px", height: "100px" }}></img>
                <label className="">{nome}</label>
                <label>{ versione }</label>
            </div>
        </>
    );
}

export default App;