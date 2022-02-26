import { Automobile } from './types/global'
import Database from './database'
import Grafica from './grafica'

const rigo = window.document.getElementById('rigo')
const divForm = window.document.querySelector('.divForm') as HTMLDivElement
const btnInserisci = window.document.getElementById(
    'inserisci'
) as HTMLButtonElement
const btnRicerca = window.document.getElementById(
    'ricerca'
) as HTMLButtonElement

window.addEventListener('load', () => {
    visualizza()
})

export function inserisci(
    targa: HTMLInputElement,
    marca: HTMLInputElement,
    tipo: HTMLInputElement,
    colore: HTMLSelectElement,
    anno: HTMLInputElement
) {
    let col = ""
    if(colore.value==='1'){
        col='BIANCO'
    }else{
        if(colore.value==='2'){
            col='NERO'
        }else{
            if(colore.value==='3'){
                col='ROSSO'
            }else{
                if(colore.value==='4'){
                    col='GIALLO'
                }else{
                    if(colore.value==='5'){
                        col='BLU'
                    }else{
                        if(colore.value==='6'){
                            col='VERDE'
                        }else{
                            if(colore.value==='7'){
                                col='ROSA'
                            }else{
                                if(colore.value==='8'){
                                    col='GRIGIO'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    const item: Automobile = {
        targa: targa.value,
        marca: marca.value,
        tipo: tipo.value,
        colore: col,
        anno_produzione: anno.value,
    }
    Database.addItem(item)
    visualizza()
}

function visualizza() {
    if (rigo !== null) rigo.innerHTML = ``
    const lista_vetture = Database.getItems()
    if (lista_vetture.length > 0 && rigo !== null) {
        for (const vettura of lista_vetture) {
            rigo.innerHTML += `
            <tr>
                <td>${vettura.targa.toUpperCase()}</td>
                <td>${vettura.marca.toUpperCase()}</td>
                <td>${vettura.tipo.toUpperCase()}</td>
                <td>${vettura.colore.toUpperCase()}</td>
                <td>${vettura.anno_produzione.toUpperCase()}</td>
            </tr>`
        }
    }
}

export function ricerca(scelta: HTMLSelectElement, valore: HTMLInputElement) {
    if (rigo !== null) rigo.innerHTML = ``
    const lista_vetture = Database.getItems()
    if (lista_vetture.length > 0 && rigo !== null) {
        for (const vettura of lista_vetture) {
            console.log(scelta.value+"-"+valore.value)
            if (
                (scelta.value == 'T' &&
                    vettura.targa === valore.value.toUpperCase()) ||
                (scelta.value == 'MA' &&
                    vettura.marca === valore.value.toUpperCase()) ||
                (scelta.value == 'MO' &&
                    vettura.tipo === valore.value.toUpperCase()) ||
                (scelta.value == 'C' &&
                    vettura.colore === valore.value.toUpperCase()) ||
                (scelta.value == 'A' &&
                    vettura.anno_produzione === valore.value.toUpperCase())
            ) {
                rigo.innerHTML += `
                <tr>
                    <td>${vettura.targa.toUpperCase()}</td>
                    <td>${vettura.marca.toUpperCase()}</td>
                    <td>${vettura.tipo.toUpperCase()}</td>
                    <td>${vettura.colore.toUpperCase()}</td>
                    <td>${vettura.anno_produzione.toUpperCase()}</td>
                </tr>`
            }
        }
    }
}

btnInserisci.addEventListener('click', () => {
    Grafica.inserisciVettura(divForm)
})
btnRicerca.addEventListener('click', () => {
    Grafica.ricercaVettura(divForm)
})
