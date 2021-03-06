import * as React from "react";

type Props = {
  onClick: (e: React.SyntheticEvent) => unknown;
  completed: boolean;
  text: string;
};

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

export default Todo;
