export const addToDo = (text) => ({
  type: 'ADD_TODO',
  text,
});

export const completeToDo = (id) => ({
  type: 'COMPLETE_TODO',
  id,
});
