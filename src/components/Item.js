import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {

changePrice =() =>{
console.log(this.props.inventory)
let newPrice = prompt("Please enter new price");
this.props.inventory.changePrice(this.props.item.name, newPrice)
}

buyItem = () => {
    console.log(this.props.inventory)

    this.props.inventory.buyItem(this.props.item.name)
  }
  render() {
      console.log(this.props.item.price)
     return (
     <div>  
      <div onClick={this.changePrice}>
         {this.props.item.quantity} {this.props.item.name} available at {this.props.item.price} per item
        </div>
        <button onClick={this.buyItem}>Buy Item</button>
    
    </div>  

       )
  }
}

export default observer(Item)