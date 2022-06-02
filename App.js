import './App.css';
import React, { Component } from 'react';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { newItem: "", list: [] };
  }
  updateInput = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  addItem = () => {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list]
    list.push(newItem);
    this.setState({list, newItem: ""})
  }
  deleteItem = (id) => {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list : updatedList})
  }
  render() {
    return (
      <div>
        <h1>todos</h1>
        <br />
        <input
          type = ""
          placeholder='Type to do here'
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button onClick={() => this.addItem()}> Add </button>
        <br />
        <ol>
          {this.state.list.map(item => {
            return(
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>Completed</button>
              </li>
            )
          })}
        </ol>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
