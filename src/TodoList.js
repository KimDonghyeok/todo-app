import React from "react";
import { Container } from "@mantine/core";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { todos, handleCheckBox } = props;

  return (
    <Container pb="sm">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            id={index}
            isDone={todo.isDone}
            text={todo.text}
            handleCheckBox={handleCheckBox}
          />
        );
      })}
    </Container>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
};
