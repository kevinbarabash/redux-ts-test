import * as React from "react";
import Todo from "./Todo";

type Props = {
  // TODO: share the Todo type with reducers/todos.ts
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  toggleTodo: (id: number) => unknown;
};

const TodoList = ({ todos, toggleTodo }: Props) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
