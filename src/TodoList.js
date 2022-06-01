import React from "react";
import { Stack } from "@mantine/core";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { todos, handleCheckBox, handleDelete } = props;
  return (
    <Stack justify="flex-start" spacing="xs">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            id={index}
            isDone={todo.isDone}
            text={todo.text}
            handleCheckBox={handleCheckBox}
            handleDelete={handleDelete}
          />
        );
      })}
    </Stack>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
