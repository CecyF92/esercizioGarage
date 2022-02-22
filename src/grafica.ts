namespace Grafica{
    export const inserisciVettura = (divElement: HTMLDivElement) =>{
        return divElement.innerHTML = `
        <div class="row">
            <div class="col">
                <label for="targa" class="form-label">Targa</label>
            </div>
            <div class="col">
                <label for="marca" class="form-label">Marca</label>
            </div>
            <div class="col">
                <label for="tipo" class="form-label">Tipo</label>
            </div>
            <div class="col">
                <label for="colore" class="form-label">Colore</label>
            </div>
            <div class="col">
                <label for="anno" class="form-label">Anno Produzione</label>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" id="targa" aria-describedby="targa">
            </div>
            <div class="col">
                <input type="text" class="form-control" id="marca" aria-describedby="marca">
            </div>
            <div class="col">
                <input type="text" class="form-control" id="tipo" aria-describedby="tipo">
            </div>
            <div class="col">
                <select class="form-select" aria-label="colore" id="colore">
                    <option selected>SCEGLI COLORE</option>
                    <option value="1">BIANCO</option>
                    <option value="2">NERO</option>
                    <option value="3">ROSSO</option>
                    <option value="4">GIALLO</option>
                    <option value="5">BLU</option>
                    <option value="6">VERDE</option>
                    <option value="7">ROSA</option>
                    <option value="8">GRIGIO</option>
                </select>
            </div>
            <div class="col">
                <input type="date" class="form-control" id="anno" aria-describedby="anno">
            </div>
        </div>
        <hr>
        <button class="btn btn-primary" id="salva">Salva</button>
        `
    }

    export const ricercaVettura = (divElement: HTMLDivElement) => {
        return divElement.innerHTML = `
        <div class="row">
            <div class="col">
                <label for="tipo" class="form-label">Da cosa vuoi fare la ricerca: </label>
            </div>
            <div class="col">
                <select class="form-select" aria-label="scelta" id="scelta">
                    <option selected>SCEGLI COLORE</option>
                    <option value="T">TARGA</option>
                    <option value=MA">MARCA</option>
                    <option value="MO">MODELLO</option>
                    <option value="C">COLORE</option>
                    <option value="A">ANNO PRODUZIONE</option>
                </select>
            </div>
            <div class="col">
                <label for="tipo" class="form-label">Inserisci valore:</label>
            </div>
            <div class="col">
                <input type="text" class="form-control" id="valore" aria-describedby="valore">
            </div>
        </div>
        <hr>
        <button class="btn btn-primary" id="search">Ricerca</button>
        `
    }
}

export default Grafica