type $Values<T extends object> = T[keyof T];

let nextTodoId = 0;
export const addTodo = (text: string) => ({
  type: "ADD_TODO" as "ADD_TODO",
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = (
  filter: $Values<typeof VisibilityFilters>
) => ({
  type: "SET_VISIBILITY_FILTER" as "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = (id: number) => ({
  type: "TOGGLE_TODO" as "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export type Action =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof setVisibilityFilter>
  | ReturnType<typeof toggleTodo>;
