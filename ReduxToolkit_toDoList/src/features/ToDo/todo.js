import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id : 1,
        textValue: 'hello world!'
    }//.......{....n} we are taking this as an example that's it
    
    
]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        // adding functionality
        // you will get always an access of two things (note = it's a syntax)  1 => state , 2 => action
        addTodo: (state , action) => {
            const todo = {
                id : nanoid(),
                textValue: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => { // state means current state we have , and action means data is passing through it
            // state and action are part of syntax
            state.todos = state.todos.filter((todo) =>todo.id !== action.payload )
        },
        updateTodo: (state,action) => {
            const {id,newText} = action.payload
            const toDoUpdate = state.todos.find((todo)=> todo.id == id )

            // control flow if toDoUpdate is == id then update the text value

            if (toDoUpdate){
                toDoUpdate.textValue = newText;
            }
        }
    }
})


export const {addTodo , removeTodo , updateTodo} = todoSlice.actions

// store.js needs to have access of every reducer

export default todoSlice.reducer