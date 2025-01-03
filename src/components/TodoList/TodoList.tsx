import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Tabs from "../Tabs/Tabs";
import classes from "./TodoList.module.css";
import { Todo } from "../../types/todoTypes";

interface TodoListProps {
  todos: Todo[];
  activeTabId: number;
  setActiveTabId: (id: number) => void;
  removeTodo: (id: string) => void;
  completeTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  activeTabId,
  setActiveTabId,
  removeTodo,
  completeTodo,
}) => {
  const filteredTodos = todos.filter((todo) => {
    if (activeTabId === 0) return !todo.completed && !todo.deleted;
    if (activeTabId === 1) return !todo.deleted;
    if (activeTabId === 2) return todo.completed && !todo.deleted;
    return true;
  });

  return (
    <div className={classes.todos}>
      <Tabs activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
      <div>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
