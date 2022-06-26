const setLocalStorageTodo = (todoList) => {
  const data = JSON.stringify(todoList);
  localStorage.setItem("kimdonghyeok.todoapps", data);
};

const getLocalStorageTodo = () => {
  const data = localStorage.getItem("kimdonghyeok.todoapps");
  const todoList = JSON.parse(data);
  return todoList;
};

export { setLocalStorageTodo, getLocalStorageTodo };
