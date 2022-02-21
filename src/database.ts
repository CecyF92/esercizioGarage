import { Automobile } from './types/global.d';

namespace Database {

    const vettore: Automobile[] = [{
        marca: 'Fiat',
        tipo: 'Panda',
        targa: 'BA973HF',
        colore: 'bianco',
        anno_produzione: '2005'
    }]

    export const getItems = () => {
        return vettore
    }

    export const addItem = (automobile: Automobile) => {
        vettore.push(automobile)
    }
    
}

export default Database