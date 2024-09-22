import '../assets/css/Componenti/AppComponent.css'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

function App({ id, nome, icona, versione, goto, active}) {
    return (
        <Link to={goto}>
            <div key={id} className="AppComponentFrame" >
                <div className="AppComponentIcona">
                    {icona}
                </div>
                <label className="AppComponentNomeLabel">{nome}</label>
                <label className="AppComponentVersionLabel">{versione}</label>
            </div>
        </Link>
    );
}

export default App;