import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import classes from "./TodoItem.module.css";
import { Todo } from "../../types/todoTypes";

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: string) => void;
  completeTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  removeTodo,
  completeTodo,
}) => {
  return (
    <div
      className={`${classes.todo_item} ${
        todo.completed ? classes.completed : ""
      }`}
    >
      <h5>{todo.text}</h5>
      <div className={classes.buttons}>
        <button onClick={() => completeTodo(todo.id)}>
          <MdDone />
        </button>
        <button onClick={() => removeTodo(todo.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
