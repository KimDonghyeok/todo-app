import React from "react";
import { CSSObject, Paper, Container, Center, Title } from "@mantine/core";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const titleStyles: CSSObject = {
  fontFamily: "Noto Sans KR",
  fontSize: 52,
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

  const handleClickPlus = (event) => {
    if (input === "") {
      return;
    }

    setTodoList([
      ...todoList,
      {
        isDone: false,
        text: input,
      },
    ]);

    setInput("");
    console.log(todoList);
  };

  const handleCheckBox = (event, index) => {
    const newTodoList = [...todoList];
    let status = newTodoList[index].isDone;
    newTodoList[index].isDone = !status;
    setTodoList(newTodoList);
  };

  return (
    <Container size="sm" py="xl">
      <Paper p="lg" shadow="md" radius="lg" withBorder>
        <Center pb="xl">
          <Title order={1} sx={titleStyles} py="md">
            todo-app
          </Title>
        </Center>
        <TodoInput
          input={input}
          handleInput={handleInput}
          handleKeyPressed={handleKeyPressed}
          handleClickPlus={handleClickPlus}
        />
        <TodoList todos={todoList} handleCheckBox={handleCheckBox} />
      </Paper>
    </Container>
  );
}
