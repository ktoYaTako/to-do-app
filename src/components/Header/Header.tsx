import React, { useState } from "react";
import Button from "../UI/Button/Button";
import classes from "./Header.module.css";

interface HeaderProps {
  addTodo: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <header className={classes.header}>
      <form className={classes.form} onSubmit={handleAddTodo}>
        <Button className={classes.button}>Добавить</Button>
        <input
          className={classes.input}
          type="text"
          placeholder="Добавьте новую задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
