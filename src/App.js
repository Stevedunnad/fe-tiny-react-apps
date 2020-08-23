import React, { Component } from "react";
import WriteTask from "./components/WriteTask";
import ListTasks from "./components/ListTasks";
import './App.css';

class App extends Component {
  state = { tasks: [] };

  updateCompleted = (id) => {
    this.setState(
      (currentState) => {
        const taskToMarkAsComplete = {...currentState.tasks[id]}
        taskToMarkAsComplete.completed = !taskToMarkAsComplete.completed
        const tasks = [...currentState.tasks];
        tasks[id] = taskToMarkAsComplete;
        return { tasks };
      },
      () => {
      }
    );
  };

  addTask = (task) => {
    this.setState((currentState) => {
      const currentTasks = currentState.tasks;
      return { tasks: [...currentTasks, { task, completed: false }] };
    });
  };

  render = () => {
    console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          <h1>The daily grind!</h1>
        </header>
        <main>
          <WriteTask addTask={this.addTask} />
          <ListTasks
            tasks={this.state.tasks}
            updateCompleted={this.updateCompleted}
          />
        </main>
      </div>
    );
  };
}

export default App;
