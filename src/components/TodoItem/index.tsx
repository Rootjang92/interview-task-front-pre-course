import Image from "next/image";
import CloseSVG from "../../public/icons/Close.svg";

interface Todo {
  id: number,
  todoText: string;
  done: boolean;
}

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
}

const TodoItem = ({ todo, onToggle }: Props) => {
  return <li className="w-full flex items-center p-2.5">
    <input type="checkbox" />
    <span>{todo.todoText}</span>
    <Image src={CloseSVG} alt="Delete todo item" width={35} />
  </li>
};

export default TodoItem;