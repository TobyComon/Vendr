import { Money } from "./Models/Money.js"
import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

money = 0

  snacks = [
    new Snack('Shingles', 2.75),
    new Snack('Moreos', 2.00),
    new Snack('Pretzels', 2.50),
    new Snack('Trail Mix', 1.35),
    new Snack('Kwanza Juice', 12.50),
    new Snack('Dr Pain', 6.59),
  ]





}





export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
