"use client";
import { useTodoStore } from "@/store/todostore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodoStore();

  return (
    <div className="w-full max-w-md mx-auto">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      ) : (
        <p className="text-center text-gray-500">No todos yet.</p>
      )}
    </div>
  );
}
