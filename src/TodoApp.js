import React from "react";
import { CSSObject, Paper, Container, Center, Title } from "@mantine/core";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const titleStyles: CSSObject = {
  fontFamily: "Noto Sans KR",
  fontSize: 52,
  fontWeight: 700,
  color: "#ead7d7",
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
  };

  const handleCheckBox = (event, index) => {
    const newTodoList = [...todoList];
    let status = newTodoList[index].isDone;
    newTodoList[index].isDone = !status;
    setTodoList(newTodoList);
  };

  const handleDelete = (event, index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  return (
    <Container size="sm" py="xl">
      <Container pb="xl">
        <Paper p="lg" shadow="sm" radius="lg">
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
        </Paper>
      </Container>
      <Container>
        <TodoList
          todos={todoList}
          handleCheckBox={handleCheckBox}
          handleDelete={handleDelete}
        />
      </Container>
    </Container>
  );
}
