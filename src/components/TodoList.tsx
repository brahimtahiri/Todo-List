import { useTodos } from "../contexts/TodoContext";
import Todo from "../models/Todo";

function TodoList() {
  const { todos, deleteTodo, completeTodo, setUpdatingTodo } = useTodos()!;

  return (
    <section>
      <h3>Vos tâches :</h3>
      {todos.length > 0 ? (
        todos.map((todo: Todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => completeTodo(todo.id)}
            />
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
        ))
      ) : (
        <h4>Aucune tâche</h4>
      )}
    </section>
  );
}

export default TodoList;
