import { FormEvent, useEffect, useState } from "react";
import { useTodos } from "../contexts/TodoContext";

function TodoForm() {
  const { todos, addTodo, updateTodo, updatingTodo, setUpdatingTodo } =
    useTodos()!;
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    if (updatingTodo) {
      setTask(updatingTodo.task);
    }
  }, [updatingTodo]);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (updatingTodo) {
      updateTodo({
        id: updatingTodo.id,
        task: task,
        completed: updatingTodo.completed,
      });
      updateReset();
    } else {
      addTodo({
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        task: task,
        completed: false,
      });
      setTask("");
    }
  };

  const updateReset = (): void => {
    setUpdatingTodo(null);
    setTask("");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="task">Tâche : </label>
      <input
        type="text"
        id="task"
        placeholder="Faire ..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      {updatingTodo ? (
        <>
          <button type="submit">Modifier</button>
          <button type="reset" onClick={() => updateReset()}>
            Annuler
          </button>
        </>
      ) : (
        <button type="submit">Créer</button>
      )}
    </form>
  );
}

export default TodoForm;
