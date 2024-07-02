import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Container, Typography } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        To-Do List
      </Typography>
      <TaskInput />
      <TaskList />
    </Container>
  );
};

export default App;
