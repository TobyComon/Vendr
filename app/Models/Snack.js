export class Snack{
    constructor (name, price){
        this.name = name
        this.price = price
        // ...
    }



    get Template() {
        return /*html*/ `
        
        <div class="bg-primary card justify-content-around my-3 p-2">
        <h3> ${this.name } - $${this.price} </h3>
        <button class="btn btn-danger col-6" onclick="app.vendController.vend('${this.name}')">PURCHASE</button>
        </div>
        
        
        
        `
    }


}