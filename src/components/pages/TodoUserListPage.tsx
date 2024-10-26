"use client";
import { ChangeEvent, useState } from "react";

import Input from "../Input";

interface Props {}

interface Todo {
  id: number,
  todo: string;
  done: boolean;
}

const TodoUserListPage = ({}: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoValue, setTodoValue] = useState('');

  const handleChangeTodoValue = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTodoValue(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      todo: todoValue,
      done: false
    };

    setTodos([...todos, newTodo]);
    setTodoValue('');
  }

  return (
    <section className="flex flex-col items-center justify-center font-pretendard">
      <h1 className="text-6xl font-bold pt-10 text-[#333333]">To Do List</h1>
      <Input value={todoValue} onChange={handleChangeTodoValue} onEnter={handleAddTodo} />
    </section>
  );
};

export default TodoUserListPage;
