import { useTodos } from "../contexts/TodoContext";
import Todo from "../models/Todo";

function TodoList() {
  const { todos, deleteTodo, setUpdatingTodo } = useTodos()!;

  return (
    <section>
      <h3>Vos tâches :</h3>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <p>
            <b>{`#${todo.id} `}</b>- {todo.task}
          </p>
          <button type="button" onClick={() => setUpdatingTodo(todo)}>
            Modifier
          </button>
          <button type="button" onClick={() => deleteTodo(todo.id)}>
            Supprimer
          </button>
        </div>
      ))}
    </section>
  );
}

export default TodoList;
