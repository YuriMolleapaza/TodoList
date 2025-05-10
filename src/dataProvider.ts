import localforageDataProvider from "ra-data-local-forage";
import localforage from "localforage";

const data = {
  todos: [
    {
      id: 0,
      title: "Lavar los platos",
      completed: false,
    },
    {
      id: 1,
      title: "Limpiar la casa",
      completed: true,
    },
    {
      id: 2,
      title: "Comprar comida",
      completed: false,
    },
  ],
};

// Ensure no conflict with other apps using localforage
localforage.config({
  name: "react-admin-todo",
});

export const dataProvider = localforageDataProvider({
  defaultData: data,
  loggingEnabled: process.env.NODE_ENV !== "test",
});
