import React, {Component} from "react";
import { Overview } from "./components/Overview";
import uniqid from 'uniqid'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsList: [],
      itemInput: {
        text: '',
        id: uniqid(),
        index: 1
      }
    }

    this.addToList = this.addToList.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      itemInput : {
        text : event.target.value,
        id: this.state.itemInput.id,
        index : this.state.itemInput.index
      }
    })
  }

  addToList(event) {
    event.preventDefault()
    this.setState({
      itemsList: this.state.itemsList.concat(this.state.itemInput),
      itemInput: {
        text: '',
        id: uniqid(),
        index: this.state.itemInput.index + 1
      }
    })
  }

  render() {
    return (
      <div>
        <form>
          <div className="item-container">
            <label htmlFor='item'>Item</label>
            <input type='text' id={this.state.itemInput.id} value={this.state.itemInput.text} onChange={this.handleChange}></input>
            <button type='submit' onClick={this.addToList}>Add</button>
            < Overview list={this.state.itemsList}></Overview>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
