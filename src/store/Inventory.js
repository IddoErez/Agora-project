/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
// import { Item } from './Inventory'

export class Item {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
        makeObservable(this, {
        name: observable,
        price: observable,
        quantity: observable
        })
    }
}
export class Inventory {
    constructor() {
        this.items = [{ name: "tomato", price: 20, quantity: 10 }, { name: "banana", price: 30, quantity: 7 }]
        makeObservable(this, {
        items: observable,
        addItem: action,
        buyItem: action,
        changePrice: action
        })
    }
    addItem = (name, price, quantity) => {
        console.log(name, price, quantity)
        let item = this.items.find(i => i.name === name)
        if (item) {
            item.quantity += 1
        } else {
            
        let item = new Item(name, price, quantity)
        console.log(item)
        this.items.push(item)
        console.log(this.items)
        }
    }
    buyItem = (name) => {
        console.log(this.items)
        let item = this.items.find(i => i.name === name)
        let itemIndex = this.items.indexOf(name)
        item.quantity > 0 ? item.quantity -= 1 : this.items.splice(itemIndex, 1)
    }
    changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name)
        console.log(item)
        item.price = price
    }
}

