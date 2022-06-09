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

  // todo input의 입력 값 바뀌었을 때 이벤트 처리
  const handleInput = (value) => {
    setInput(value);
  };

  // todo 생성
  const createTodo = () => {
    // 현재 "input" 값으로  todo object 생성, todoList에 삽입
    setTodoList([
      ...todoList,
      {
        isDone: false,
        text: input,
      },
    ]);

    // input 값 초기화
    setInput("");
  };

  // todo input에서 엔터를 눌렀을 때 이벤트 처리
  const handleKeyPressed = (event) => {
    // input이 비어있으면 함수 종료
    if (input === "") {
      return;
    }

    // Enter 키를 눌렀을 때 createTodo 함수 호출
    if (event.key === "Enter") {
      createTodo();
    }
  };

  // todo input에서 + 버튼을 클릭했을 때 이벤트 처리, handle
  const handleClickPlus = (event) => {
    if (input === "") {
      return;
    }

    // createTodo 함수 호출
    createTodo();
  };

  // 체크박스 클릭시 이벤트 처리, 해당 todoItem의 index로 todoList에서 탐색하여 isDone 값 변경
  const handleCheckBox = (event, index) => {
    const newTodoList = [...todoList];
    let status = newTodoList[index].isDone;
    newTodoList[index].isDone = !status;
    setTodoList(newTodoList);
  };

  // 삭제버튼 클릭 시 이벤트 처리, 해당 todoItem의 index로 todoList에서 Array.splice 메소드로 해당 todo object 삭제
  const handleDelete = (event, index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  return (
    <Container size="sm" py="xl">
      <Container pb="xl">
        <Paper p="lg" shadow="xs" radius="lg">
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
