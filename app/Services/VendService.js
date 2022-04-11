import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js"

class VendService{
    vend(snackName) {
        let foundSnack = ProxyState.snacks.find(s => s.name == snackName)
        let money = ProxyState.money
        if (money >= foundSnack.price) {
            money -= foundSnack.price
        }
        else {
            Pop.toast(`Not enough money for ${foundSnack.name} !!! Alerting Local Law Enforcement`)
        }
    }
    money() {
        let money = ProxyState.money
        money += .25
    }

}




// NOTE this is theSingleton pattern
export const vendService = new VendService()