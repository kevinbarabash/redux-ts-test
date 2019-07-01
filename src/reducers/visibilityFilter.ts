import { VisibilityFilters, Action } from "../actions";

type $Values<T extends object> = T[keyof T];

const visibilityFilter = (
  state: $Values<typeof VisibilityFilters> = VisibilityFilters.SHOW_ALL,
  action: Action
) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
