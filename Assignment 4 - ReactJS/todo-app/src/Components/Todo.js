import Tasks from "./TaskList";
import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const data = {};

    data.id = todo.length === 0 ? 1 : todo[todo.length - 1].id + 1;
    data.completed = false;
    data.task = <h1>{newTask}</h1>;

    setTodo([...todo, data]);
  };

  const deleteTask = (taskId) => {
    const newList = todo.filter((element) => {
      return element.id === taskId ? false : true;
    });

    setTodo(newList);
  };

  const completeTask = (taskId) => {
    let newList = todo.map((element) => {
      element.completed =
        element.id === taskId || element.completed ? true : false;
      return element;
    });

    setTodo(newList);
  };

  return (
    <>
      <div>
        <h1>Enter tasks</h1>
        <input type="text" onChange={handleNewTask}></input>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div>
        {todo.map((element, key) => {
          return (
            <Tasks
              task={element.task}
              id={element.id}
              completed={element.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </>
  );
};

export default Todo;
