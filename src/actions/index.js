let nextTodoId = 0;

export const addTodo = text => {
    console.log(nextTodoId);
    return {
    type:'ADD_TODO',
    id:nextTodoId++,
    text
}
}

export const setVisibilityFilter = filter => ({
    type:'SET_VISIBILITY_STRING',
    filter
}
)

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
  })

export const VisibilityFilters = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}