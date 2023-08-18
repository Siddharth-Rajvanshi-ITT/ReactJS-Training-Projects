const TaskList = (props) => {
  return (
    <div className={props.completed ? "completed" : ""}>
      {props.task}
      <button onClick={() => {props.deleteTask(props.id)}}>X</button>
      <button onClick={() => {props.completeTask(props.id)}}>completed</button>
    </div>
  );
};

export default TaskList;