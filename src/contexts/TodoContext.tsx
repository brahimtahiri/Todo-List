import { ReactNode, createContext, useContext, useState } from "react";
import Todo from "../models/Todo";

interface TodoContextProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (updatedTodo: Todo) => void;
  deleteTodo: (id: number) => void;
  updatingTodo: Todo | null;
  setUpdatingTodo: (todo: Todo | null) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: "Apprendre TypeScript", completed: true },
    { id: 2, task: "Apprendre React", completed: true },
    { id: 3, task: "Apprendre Tailwind CSS", completed: false },
  ]);
  const [updatingTodo, setUpdatingTodo] = useState<Todo | null>(null);

  const addTodo = (todo: Todo): void => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo: Todo): void => {
    setTodos(
      [...todos].map((todo: Todo) => {
        return todo.id === updatedTodo.id ? updatedTodo : todo;
      })
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos([...todos].filter((todo: Todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        updatingTodo,
        setUpdatingTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = (): TodoContextProps | undefined => {
  return useContext(TodoContext);
};
