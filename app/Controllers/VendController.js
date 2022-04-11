import { ProxyState } from "../AppState.js";
import { vendService } from "../Services/VendService.js";

function _drawSnacks() {
let template = ''
ProxyState.snacks.forEach(s => template += s.Template)
document.getElementById('snacks').innerHTML = template



}

function _drawMoney() {
   let money = ProxyState.money
    document.getElementById('money').innerHTML = money
    
}


export class VendController {
    constructor() {
        ProxyState.on('snacks', _drawSnacks)
        _drawSnacks()
        ProxyState.on('money', _drawMoney)
        _drawMoney()
    }
   
    vend(snackName) {
        vendService.vend(snackName)
    }
    money() {
        vendService.money()
    }
    
}