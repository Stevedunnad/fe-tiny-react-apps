import React, { Component } from "react";

class WriteTask extends Component {
  state = {
    taskToAdd: "",
  };

  handleChange = (event) => {
    const inputValue = event.target.value;
    this.setState((currentState) => {
      return {
        taskToAdd: inputValue,
      };
    });
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();

    //added this so empty field can't be submitted:
    this.state.taskToAdd.length && this.props.addTask(this.state.taskToAdd);

    //added this to clear input on submit:
    this.setState({ taskToAdd: "" });
  };

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task: 
          <input
            type="text"
            placeholder="Task"
            value={this.state.taskToAdd}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add task</button>
      </form>
    );
  };
}

export default WriteTask;
