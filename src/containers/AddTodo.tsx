import * as React from "react";
import { connect } from "react-redux";
import { Action, addTodo } from "../actions";

type Props = {
  dispatch: (action: Action) => unknown;
};

const AddTodo = ({ dispatch }: Props) => {
  let input: HTMLInputElement | null;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (input) {
            if (!input.value.trim()) {
              return;
            }
            dispatch(addTodo(input.value));
            input.value = "";
          }
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
