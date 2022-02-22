import { Automobile } from './types/global';
import Database from "./database";
import Grafica from './grafica';

const targa = (window.document.getElementById('targa') as HTMLInputElement)
const marca = (window.document.getElementById('marca') as HTMLInputElement)
const tipo = (window.document.getElementById('tipo') as HTMLInputElement)
const colore = (window.document.getElementById('colore') as HTMLInputElement)
const anno = (window.document.getElementById('anno') as HTMLInputElement)
const btn = window.document.getElementById('salva') as HTMLInputElement
const rigo = window.document.getElementById('rigo')
const divForm = window.document.querySelector('.divForm') as HTMLDivElement
const btnInserisci = window.document.getElementById('inserisci') as HTMLButtonElement
const btnRicerca = window.document.getElementById('ricerca') as HTMLButtonElement
const scelta = window.document.getElementById('scelta') as HTMLSelectElement
const search = window.document.getElementById('search') as HTMLButtonElement

window.addEventListener('load', () =>{
    visualizza()
})

function inserisci(){
    const item: Automobile = {
        targa: targa.value,
        marca: marca.value,
        tipo: tipo.value,
        colore: colore.value,
        anno_produzione: anno.value
    }
    Database.addItem(item)
    visualizza();
}

function visualizza(){
    if(rigo!==null) rigo.innerHTML = ``
    const lista_vetture = Database.getItems()
    if(lista_vetture.length > 0 && rigo !== null) {
        for(const vettura of lista_vetture){
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


btnInserisci.addEventListener('click', () => {
    Grafica.inserisciVettura(divForm)
})
btnRicerca.addEventListener('click', () => {
    Grafica.ricercaVettura(divForm)
} )
search.addEventListener('click', () => {
    console.log("Sono qui", scelta.value)
})
btn.addEventListener('click', () => inserisci())
