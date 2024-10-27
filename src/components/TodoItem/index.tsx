import Image from "next/image";

import Checkbox from "../Checkbox";
import CloseSVG from "../../public/icons/Close.svg";

interface Todo {
  id: number,
  todoText: string;
  done: boolean;
}

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
  return (
    <li className="w-full flex items-center py-8 px-4 gap-4">
      <Checkbox checked={todo.done} onChange={() => onToggle(todo.id)} />
      <span className={`text-[20px] ${todo.done && "text-[#868686]"}`}>{todo.todoText}</span>
      <Image src={CloseSVG} alt="Delete todo item" width={35} className="ml-auto cursor-pointer" onClick={() => onDelete(todo.id)} />
    </li>
  )
};

export default TodoItem;