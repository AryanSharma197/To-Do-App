import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

// Initial state for tasks
const initialState = {
    tasks: []
};

// Reducer function for tasks
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task)
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task)
            };
        default:
            return state;
    }
};

export default taskReducer;
