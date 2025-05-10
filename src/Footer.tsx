import { useListContext, useDeleteMany } from "ra-core";
import clsx from "clsx";

import type { Todo } from "./types";

export const Footer = () => {
  const { data, total, filterValues, setFilters, isPending, error } =
    useListContext<Todo>();
  const [deleteMany] = useDeleteMany();

  if (isPending || error) return null;

  const handleClearCompleted = () => {
    const completedIds = data
      .filter((todo) => todo.completed)
      .map((todo) => todo.id);
    deleteMany("todos", { ids: completedIds });
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{total}</strong>
        {total === 1 ? " tarea" : " tareas"} por hacer
      </span>

      <ul className="filters">
        <li>
          <a
            className={clsx({
              selected: !Object.prototype.hasOwnProperty.call(
                filterValues,
                "Completado",
              ),
            })}
            href="#"
            onClick={(event) => {
              setFilters({});
              event.preventDefault();
            }}
          >
            Todos
          </a>
        </li>
        <li>
          <a
            className={clsx({ selected: filterValues.completed === false })}
            href="#"
            onClick={(event) => {
              setFilters({ completed: false });
              event.preventDefault();
            }}
          >
            Pendientes
          </a>
        </li>
        <li>
          <a
            className={clsx({ selected: filterValues.completed === true })}
            href="#"
            onClick={(event) => {
              setFilters({ completed: true });
              event.preventDefault();
            }}
          >
            Completos
          </a>
        </li>
      </ul>

      {total != null && (
        <button className="clear-completed" onClick={handleClearCompleted}>
          Limpiar completados
        </button>
      )}
    </footer>
  );
};
