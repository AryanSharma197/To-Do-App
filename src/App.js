import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography, Grid } from '@mui/material'; // Import Grid from MUI

const App = () => {
    return (
        <Provider store={store}>
            {/* Container with maxWidth to limit app width */}
            <Container maxWidth="md">
                {/* Grid container for responsive and organized layout */}
                <Grid container direction="column" alignItems="center" spacing={3}>
                    {/* Heading for the application */}
                    <Grid item>
                        <Typography variant="h4" component="h1" gutterBottom>
                            To-Do List
                        </Typography>
                    </Grid>
                    {/* Task input component */}
                    <Grid item>
                        <TaskInput />
                    </Grid>
                    {/* Task list component */}
                    <Grid item>
                        <TaskList />
                    </Grid>
                </Grid>
            </Container>
        </Provider>
    );
};

export default App;
