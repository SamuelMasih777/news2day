export const MobileReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIAL_STATE":
      return {
        ...state,
        title: "",
        category: "",
        content: "",
        image: null,
        video: "",
      };
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "CONTENT":
      return {
        ...state,
        content: payload,
      };
    case "CATEGORY":
      return {
        ...state,
        category: payload,
      };
    case "IMAGE":
      return {
        ...state,
        image: payload,
      };
    case "VIDEO":
      return {
        ...state,
        video: payload,
      };
    default:
      return state;
  }
};
