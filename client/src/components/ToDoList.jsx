import React from 'react';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      this.props.toDo.map((item, idx) => (
        <div className='toDoItem' key={idx}>
          {item}
        </div>
      ))
    )
  }
}

export default ToDoList;