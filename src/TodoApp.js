import React, { useEffect, useRef } from "react";
import { CSSObject, Paper, Container, Center, Title } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {
  getLocalStorageTodo,
  setLocalStorageTodo,
} from "./LocalStorageController";

const titleStyles = (): CSSObject => {
  return {
    fontFamily: "Noto Sans KR",
    fontSize: 52,
    fontWeight: 700,
    color: "#ead7d7",
  };
};

export default function TodoApp() {
  const [input, setInput] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);

  // useRef hook을 사용하여 todo-app의 마운트 상태에 대한 값을 지정
  const mounted = useRef(false);

  // useEffecy hook을 사용하여 LocalStorage에 저장된 todoList를 로드, 저장
  useEffect(() => {
    // useRef hook으로 반환된 mounted.current 값에 따라서 LocalStorage의 데이터 조작
    // mounted.current = false -> 최초 마운트이므로 mounted.current = true로 변경 후 LocalStorage에서 todoList 데이터 로드
    // mounted.current = true -> 이미 마운트 된 상태이므로 todoList의 변경이 있을 때마다 LocalStorage에 todoList 데이터 저장
    if (!mounted.current) {
      mounted.current = true;
      const newList = getLocalStorageTodo();
      setTodoList(newList);
    } else {
      setLocalStorageTodo(todoList);
    }
  }, [todoList]);

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
        id: uuidv4(),
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
  const handleCheckBox = (index) => {
    const newTodoList = [...todoList];
    let status = newTodoList[index].isDone;
    newTodoList[index].isDone = !status;
    setTodoList(newTodoList);
  };

  // 삭제버튼 클릭 시 이벤트 처리, 해당 todoItem의 index로 todoList에서 Array.splice 메소드로 해당 todo object 삭제
  const handleDelete = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  const handleLocalStorage = (newList) => {
    setLocalStorageTodo(newList);
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
          handleLocalStorage={handleLocalStorage}
        />
      </Container>
    </Container>
  );
}
