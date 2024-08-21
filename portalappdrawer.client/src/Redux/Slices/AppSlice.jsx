import { createSlice } from '@reduxjs/toolkit'

export const AppSlice = createSlice({
    name: 'application',
    initialState: {
        value: [
            {
                id: 0,
                icona: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png',
                nome: 'Instagram Watchdog',
                descrizione: 'Attraverso l\'utilizzo delle API di meta recuperare informazioni sull\'account.',
                versione: '0.0.0',
            },
            {
                id: 1,
                icona: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fmit.gov.it%2F%3Flocale%3Dit_IT&psig=AOvVaw1G8dBuzsiLwZ5ck7sHG0IF&ust=1724276978058000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODEkbjGhIgDFQAAAAAdAAAAABAS',
                nome: 'Ministero dei trasporti Watchdog',
                descrizione: 'Attraverso l\'utilizzo delle API del ministero dei trasporti recuperare le informazioni di un veicolo dalla sua targa.',
                versione: '0.0.0',
            },
            {
                id: 2,
                icona: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fit.freepik.com%2Fvettori-premium%2Ficona-dell-interfaccia-grafica-colorata-tridimensionale-isolata-su-bianco-elemento-di-design-vettoriale-idea-lavoro-di-squadra-simbolo-speciale-web-astratto_27475206.htm&psig=AOvVaw0QQX5qvNqg1ARUFOJNLTsR&ust=1724277092235000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDn6vbGhIgDFQAAAAAdAAAAABAE',
                nome: 'Sidenav template',
                descrizione: 'Collezione delle sidenav sviluppate per le varie piattaforme web-app.',
                versione: '0.0.0',
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