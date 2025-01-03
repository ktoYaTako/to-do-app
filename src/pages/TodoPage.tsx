import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList/TodoList";
import Header from "../components/Header/Header";
import { Todo } from "../types/todoTypes";

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [activeTabId, setActiveTabId] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      deleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, deleted: true } : todo
      )
    );
  };

  const completeTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.deleted));
  };

  return (
    <div>
      <Header addTodo={addTodo} />
      <TodoList
        todos={todos}
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
};

export default TodoPage;
