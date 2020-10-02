export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'COMPLETE_TODO':
      console.log(action);
      state.forEach((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return state;
      });
    default:
      return state;
  }
};
