import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import { VisibilityFilters, Action } from "../actions";

import { Todo } from "./todos";

type $Values<T extends object> = T[keyof T];

export type State = {
  todos: Todo[];
  visibilityFilter: $Values<typeof VisibilityFilters>;
};

export default combineReducers<State, Action>({
  todos,
  visibilityFilter
});
