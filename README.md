# React To-Do App

This is a simple To-Do application built with React, Redux, and MUI. It allows users to add, view, and delete tasks, with persistent storage using `localStorage`.

## Features

- Add Task: Input a task into a text field and add it to the list.
- View Tasks: Display all added tasks in a list format.
- Delete Task: Remove a task from the list by clicking the delete button.
- Edit Task: Edit a task by clicking the edit button.
- Mark Task as Completed: Toggle the task's state and styling.
- Persistent Storage: Tasks are saved to `localStorage` and not lost on page reload.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/react-todo-app.git
    cd react-todo-app
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Run the application:

    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Code Structure

- `src/components/`: Contains React components (`TaskInput.jsx` and `TaskList.jsx`).
- `src/redux/`: Contains Redux actions, reducers, and store.
- `src/App.jsx`: Main application component.
- `src/index.jsx`: Entry point of the application.
- `src/App.css`: Application styling.

## Comments

The code is well-commented to describe the logic and approach used in the application.

## Contributing

Feel free to fork this repository and submit pull requests.

## License

This project is licensed under the MIT License.
