import { Automobile } from './types/global';
import Database from "./database";

const targa = (window.document.getElementById('targa') as HTMLInputElement)
const marca = (window.document.getElementById('marca') as HTMLInputElement)
const tipo = (window.document.getElementById('tipo') as HTMLInputElement)
const colore = (window.document.getElementById('colore') as HTMLInputElement)
const anno = (window.document.getElementById('anno') as HTMLInputElement)
const btn = window.document.getElementById('salva') as HTMLInputElement
const rigo = window.document.getElementById('rigo')


window.document.addEventListener('load', visualizza)

function inserisci(){
    const item: Automobile = {
        targa: targa.value,
        marca: marca.value,
        tipo: tipo.value,
        colore: colore.value,
        anno_produzione: anno.value
    }
    console.log(item)
    Database.addItem(item)
    console.log(Database.getItems())
    visualizza();
}

function visualizza(){
    const lista_vetture = Database.getItems()
    if(lista_vetture.length > 0 && rigo !== null) {
        for(const vettura of lista_vetture){
            rigo.innerHTML += `<tr>`
            rigo.innerHTML += `<td>${vettura.targa}</td>`
            rigo.innerHTML += `<td>${vettura.marca}</td>`
            rigo.innerHTML += `<td>${vettura.tipo}</td>`
            rigo.innerHTML += `<td>${vettura.colore}</td>`
            rigo.innerHTML += `<td>${vettura.anno_produzione}</td>`
            rigo.innerHTML += `</tr>`
        }
    }
    console.log(rigo)
}

btn.addEventListener('click', inserisci)

