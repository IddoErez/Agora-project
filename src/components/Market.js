import React, { Component, useState } from 'react';
import { observer } from 'mobx-react'
import Item from './Item'

const Market = observer((props) => {
   const [newItem, setNewItem] = useState({name: "grapes", price: 100, quantity: 55})

   const handleInput =({target})=>{
     let name=target.name
     let value=target.value
     const inputs ={...newItem}
     inputs[name] = value
     setNewItem(inputs)
   }

const addItem = () => {
    console.log(newItem)
   props.store.addItem(newItem.name, newItem.price, newItem.quantity)
}
  
      return (
      <div>
          <input name="name" placeholder="name" value={newItem.name} type="text" onChange={handleInput}/>
          <input name="price" placeholder="price" value={newItem.price} type="text" onChange={handleInput}/>
          <input  name="quantity" placeholder="quantity" value={newItem.quantity} type="text" onChange={handleInput}/>
          <button onClick={addItem}>Add Item</button>
          {props.store.items.map((i, ind)=><Item item={i} key={ind} inventory={props.store}/>)}
    </div>)
  
})

export default Market