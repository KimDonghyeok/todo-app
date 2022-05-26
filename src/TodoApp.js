import React from "react";
import {
  Paper,
  Text,
  Container,
  TextInput,
  CSSObject,
  Center,
} from "@mantine/core";
import { TodoItem } from "./TodoItem";
import "./css/fonts.css";

const titleStyles: CSSObject = {
  fontFamily: "Josefin Slab",
  fontSize: 48,
  fontWeight: 700,
};

function TodoApp() {
  const [inputText, setInputText] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  let id = 0;

  const handleKeyPressed = (event) => {
    event.stopPropagation();
    if (inputText !== "") {
      if (event.key === "Enter") {
        setTodoList([
          ...todoList,
          { id: id++, text: inputText, isDone: false },
        ]);
        setInputText("");
      }
    } else {
      return;
    }
  };

  return (
    <Container size="sm" py="xl">
      <Paper shadow="md" withBorder p="lg">
        <Center>
          <Text sx={titleStyles} py="md">
            To-Do List
          </Text>
        </Center>
        <Container>
          <TextInput
            type="text"
            placeholder="What's your To-Do things?"
            radius="md"
            size="lg"
            value={inputText}
            onChange={(event) => {
              setInputText(event.target.value);
            }}
            onKeyDown={handleKeyPressed}
            pb="md"
          />
        </Container>
        <Container py="md">
          {todoList.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                isDone={item.isDone}
                text={item.text}
              />
            );
          })}
        </Container>
      </Paper>
    </Container>
  );
}

export default TodoApp;
