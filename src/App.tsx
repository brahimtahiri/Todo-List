import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <>
      <header>
        <h1>Todo-list</h1>
      </header>
      <main>
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
      </main>
    </>
  );
}

export default App;
