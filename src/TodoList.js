import React from "react";
import { Stack } from "@mantine/core";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { todos, handleCheckBox, handleDelete } = props;
  return (
    <Stack justify="flex-start" spacing="xs">
      {
        // TodoApp에서 유지되는 "todoList"의 변경이 있을 때마다 Array.prototype.map 함수를 사용하여 자동으로 re-render
        // re-render 할 때마다 변경된 index로 id 새로 부여
        todos.map((todo, index) => {
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
        })
      }
    </Stack>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
