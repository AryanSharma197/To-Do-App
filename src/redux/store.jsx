import { createStore } from 'redux';
import taskReducer from './reducers';

// Function to load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('tasks');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Function to save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('tasks', serializedState);
    } catch (err) {
        // Ignore write errors
    }
};

// Load persisted state from localStorage
const persistedState = loadState();

// Create Redux store with taskReducer and persisted state
const store = createStore(
    taskReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Subscribe to store updates to save state to localStorage
store.subscribe(() => {
    saveState({
        tasks: store.getState().tasks
    });
});

export default store;
