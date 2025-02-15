"use client";
import TodoList from "@/components/ui/TodoList";
import TodoForm from "@/components/ui/TodoForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Todo List</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
