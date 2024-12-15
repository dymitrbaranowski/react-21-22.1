import React, { Component } from 'react';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import initialTodos from '../todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#f44336' },
//   { label: 'green', color: '#4caf50' },
//   { label: 'blue', color: '#2196f3' },
//   { label: 'grey', color: '#607d8b' },
//   { label: 'pink', color: '#e91e63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter initialValue={0} />
        <Dropdown /> */}

        <div>
          <span>Общее кол-во : {totalTodoCount}</span>
          <span> Кол-во выполненных {completedTodosCount}:</span>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        {/* <ColorPicker options={colorPickerOptions} /> */}
      </>
    );
  }
}

export default App;
