import React from "react";
import { CSSObject, Paper, Text, Container, Center } from "@mantine/core";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./css/fonts.css";

const titleStyles: CSSObject = {
  fontFamily: "Josefin Slab",
  fontSize: 48,
  fontWeight: 700,
};

export default function TodoApp() {
  const [input, setInput] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);

  const handleInput = (value) => {
    setInput(value);
  };

  const handleKeyPressed = (event) => {
    if (input === "") {
      return;
    }

    if (event.key === "Enter") {
      setTodoList([
        ...todoList,
        {
          isDone: false,
          text: input,
        },
      ]);

      setInput("");
      console.log(todoList);
    }
  };

  const handleCheckBox = (event, index) => {
    const newTodoList = [...todoList];
    let status = newTodoList[index].isDone;
    newTodoList[index].isDone = !status;
    setTodoList(newTodoList);
  };

  return (
    <Container size="sm" py="xl">
      <Paper p="lg" shadow="md" withBorder radius="lg">
        <Center>
          <Text sx={titleStyles} py="md">
            To-Do List
          </Text>
        </Center>
        <TodoInput
          input={input}
          handleInput={handleInput}
          handleKeyPressed={handleKeyPressed}
        />
        <TodoList todos={todoList} handleCheckBox={handleCheckBox} />
      </Paper>
    </Container>
  );
}
