import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Market from './components/Market';

class App extends Component {
  constructor() {
    super()
    // this.state = {
    //   newItem: ''
    // }
  }
  // handleChange = (e) => {
  //   this.setState({
  //     newItem: e.target.value
  //   })
  // }
  // addItem = () => {
  //   this.props.store.addItem(this.state.newItem)
  // }
  render() {
      return (
      <div className="App">
         <Market store={this.props.store} />
      </div>
    );
  }
}

export default observer(App);
