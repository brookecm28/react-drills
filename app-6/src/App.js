import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList'

class App extends Component {
  constructor () {
    super()
    this.state = {
        userInput: '',
        outPut: []
    }
    this.handleClick = this.handleClick.bind(this)
}

handleChange (e) {
  this.setState ({
      userInput: e
  })
}

handleClick (e) {
  this.setState({
    outPut: [...this.state.outPut, this.state.userInput],
    userInput: ''
  })
}

render() {
  let list = this.state.outPut.map((element, index) => {
    return <TodoList key={index} task={element} />
  })
  return (
    

    <div>
      <h1>My To Do List: </h1>
      <div>
        <input task={this.state.userInput} placeholder='Enter a new task' onChange={e => this.handleChange(e.target.value)} />
        <button onClick={() => this.handleClick(this.state.userInput)}>Add</button>     
      </div>
      <br />
      {list}
    </div>
  )
}
}

export default App;
