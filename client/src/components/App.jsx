import React from 'react';
import ToDo from './ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: [
        'Do a Thing',
        'Do another Thing',
        'Redo that first thing'
      ]
    };
  }
  render() {
    return (
      <div>
        <ToDoList toDo={this.state.toDo} />
      </div>
    )
  }
}

export default App;