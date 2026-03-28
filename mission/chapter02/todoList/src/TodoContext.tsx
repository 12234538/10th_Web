import { createContext, useState } from 'react';

type Task = {
  id: number;
  text: string;
};

type TodoContextType = {
  input: string;
  todos: Task[];
  dones: Task[];
  setInput: (value: string) => void;
  addTodo: (text: string) => void;
  moveToDone: (task: Task) => void;
  deleteDone: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<Task[]>([]);
  const [dones, setDones] = useState<Task[]>([]);

  function addTodo(text: string): void {
    const newTask: Task = { id: Date.now(), text };
    setTodos((prev) => [...prev, newTask]);
  }

  function moveToDone(task: Task): void {
    setTodos((prev) => prev.filter((t) => t.id !== task.id));
    setDones((prev) => [...prev, task]);
  }

  function deleteDone(id: number): void {
    setDones((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <TodoContext.Provider
      value={{ input, todos, dones, setInput, addTodo, moveToDone, deleteDone }}
    >
      {children}
    </TodoContext.Provider>
  );
}
