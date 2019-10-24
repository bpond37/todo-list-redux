export const checkTodo = (tno) =>({
  type:'CHECK_TODO',
  tno
})

export const addTodo = (title) => ({
  type:'ADD_TODO',
  title
})

export const deleteTodo = (tno)=>({
  type:'DELETE_TODO',
  tno
})

export const editTodo = (tno,title)=>({
  type:'EDIT_TODO',
  title,
  tno
})