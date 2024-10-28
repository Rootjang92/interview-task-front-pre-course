export type TabType = "all" | "todo" | "done";

export interface Todo {
  id: number,
  todoText: string;
  done: boolean;
}