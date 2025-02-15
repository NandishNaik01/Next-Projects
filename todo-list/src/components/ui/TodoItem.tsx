"use client";

import { useTodoStore } from "@/store/todostore";

type Props = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoItem({ id, text, completed }: Props) {
  const { toggleTodo, removeTodo } = useTodoStore();

  return (
    <div className="flex items-center justify-between p-3 border-b">
      <span
        className={`cursor-pointer ${completed ? "line-through text-gray-500" : ""}`}
        onClick={() => toggleTodo(id)}
      >
        {text}
      </span>
      <button onClick={() => removeTodo(id)} className="text-red-500">
        ❌
      </button>
    </div>
  );
}
