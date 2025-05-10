import type { ReactNode } from "react";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";

import "./app.css";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <section className="todoapp">{children}</section>
    <footer className="info">
      <h1>Doble Clic para editar una tarea</h1>      
    </footer>
  </>
);
