"use client";
import { ChangeEvent, useState } from "react";

import Input from "../Input";
import TodoItem from "../TodoItem";
import Tab from "../Tab";

type TabType = "all" | "todo" | "done";
interface Todo {
  id: number,
  todoText: string;
  done: boolean;
}

interface TabConfig {
  value: TabType,
  label: string;
}

const TODO_TABS: TabConfig[] = [
  {
    value: "all",
    label: "All"
  },
  {
    value: "todo",
    label: "To do"
  },
  {
    value: "done",
    label: "Done"
  }
]

const TodoUserListPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoValue, setTodoValue] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('all');

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

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleTab = (tab: TabType) => {
    setActiveTab(tab);
  };

  const filteredTodos = todos.filter((todo) => {
    switch (activeTab) {
      case "todo":
        return !todo.done;
      case "done":
        return todo.done;
      default:
        return true;
    }
  });

  return (
    <section className="flex flex-col items-center justify-center font-pretendard">
      <h1 className="text-6xl font-bold pt-10 text-[#333333]">To Do List</h1>
      <Input value={todoValue} onChange={handleChangeTodoValue} onEnter={handleAddTodo} />
      <article className="p-8 rounded-[24px] w-full bg-white shadow-md flex flex-col gap-8">
        <div className="w-full flex items-center justify-center gap-2">
          {TODO_TABS.map((tab) => <Tab value={tab.value} label={tab.label} onTabChange={handleTab} activeTab={activeTab} />)}
        </div>
        <span className="w-full text-[20px] text-black">총 {todos.length}개</span>
        <ul className="w-full">
          {
            filteredTodos.map((todo) => <TodoItem todo={todo} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />)
          }
        </ul>
      </article>
    </section>
  );
};

export default TodoUserListPage;
