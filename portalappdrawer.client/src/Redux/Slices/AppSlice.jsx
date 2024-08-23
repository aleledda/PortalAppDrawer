import { createSlice } from '@reduxjs/toolkit'
import '../../assets/css/Componenti/AppComponent.css';

export const AppSlice = createSlice({
    name: 'application',
    initialState: {
        value: [
            {
                id: 0,
                icona: <i className="bi bi-instagram" ></i>,
                nome: 'Instagram Watchdog',
                descrizione: 'Attraverso l\'utilizzo delle API di meta recuperare informazioni sull\'account.',
                versione: '0.0.0',
                goto: '/InstagramWatchdog',
            },
            {
                id: 1,
                icona: <i className="bi bi-car-front-fill"></i>,
                nome: 'Veicolo Watchdog',
                descrizione: 'Attraverso l\'utilizzo delle API del ministero dei trasporti recuperare le informazioni di un veicolo dalla sua targa.',
                versione: '0.0.0',
                goto: '/VeicoloWatchdog',
            },
            {
                id: 2,
                icona: <i className="bi bi-layout-sidebar"></i>,
                nome: 'Sidenav template',
                descrizione: 'Collezione delle sidenav sviluppate per le varie piattaforme web-app.',
                versione: '0.0.0',
                goto: '/SidenavTemplate',
            },
        ],
    },
    reducers: {
        // Azioni
        /*add: (state, action) => {
            state.value.push(action.payload)
        },*/
    },
})

// export const { add } = AppSlice.actions
export const AppReducer = AppSlice.reducer