"use client";
import { ChangeEvent, useState } from "react";

import Input from "../Input";
import TodoItem from "../TodoItem";

interface Props {}

interface Todo {
  id: number,
  todoText: string;
  done: boolean;
}

const TodoUserListPage = ({}: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoValue, setTodoValue] = useState('');

  const handleChangeTodoValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      todoText: todoValue,
      done: false
    };

    setTodos([...todos, newTodo]);
    setTodoValue('');
  }

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map((todo => todo.id === id ? { ...todo, done: !todo.done} : todo )))
  };

  return (
    <section className="flex flex-col items-center justify-center font-pretendard">
      <h1 className="text-6xl font-bold pt-10 text-[#333333]">To Do List</h1>
      <Input value={todoValue} onChange={handleChangeTodoValue} onEnter={handleAddTodo} />
      {
        todos.map((todo) => <TodoItem todo={todo} onToggle={handleToggleTodo} />)
      }
    </section>
  );
};

export default TodoUserListPage;
