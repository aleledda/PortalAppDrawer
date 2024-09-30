import '../assets/css/Componenti/AppComponent.css'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App({ id, nome, icona, goto, active, versione, descrizione }) {
    const handleMouseOverVersion = () => {
        toast(<div style={{ whiteSpace: 'pre-wrap' }}> {nome} <br /> {descrizione}<br />versione: {versione}</div>);
        
    };

    return (
        <div onMouseOver={handleMouseOverVersion}>
            <Link to={goto}>
                <div key={id} className="AppComponentFrame">
                    <div className="AppComponentIcona">
                        {icona}
                    </div>
                    <label className="AppComponentNomeLabel">{nome}</label>
                    <label className="AppComponentVersionLabel">{versione}</label>
                </div>
            </Link>
        </div>
    );
}

export default App;