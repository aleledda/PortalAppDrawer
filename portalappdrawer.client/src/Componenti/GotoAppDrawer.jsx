import '../assets/css/Componenti/GotoAppDrawerComponent.css'
import '../assets/css/Componenti/AppComponent.css'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

function GotoAppDrawer() {
    return (
        <Link to={ "/" }>
            <div className="GotoAppDrawerFrame">
                <div className="GotoAppDrawerIcona">
                    <i class="bi bi-boxes"></i>
                </div>
            </div>
        </Link>
    );
}

export default GotoAppDrawer;