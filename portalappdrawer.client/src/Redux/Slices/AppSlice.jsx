import { createSlice } from '@reduxjs/toolkit'
import '../../assets/css/Componenti/AppComponent.css';

export const AppSlice = createSlice({
    name: 'application',
    initialState: {
        value: [
            {
                id: 1,
                icona: <i className="bi bi-layout-sidebar"></i>,
                nome: 'Sidenav template',
                descrizione: 'Collezione delle sidenav sviluppate per le varie piattaforme web-app.',
                versione: '0.0.0',
                goto: '/SidenavTemplate',
                attivo: false,
            },
            {
                id: 2,
                icona: <i class="bi bi-journal-code"></i>,
                nome: 'Preventivo software',
                descrizione: 'Calcolatore preventivo sviluppo software.',
                versione: '0.0.0',
                goto: '/Preventivo',
                attivo: false,
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