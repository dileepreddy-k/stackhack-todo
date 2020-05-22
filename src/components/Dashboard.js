import React, { Fragment, useContext, useState } from 'react';

//utils
import { userContext } from '../utils/userContext';

//Material Components
import { Button, Typography } from '@material-ui/core';

//Custom Components
import TodoDialog from './TodoDialog';
import ToDoList from './ToDoList';


function Dashboard() {
	const value =  useContext(userContext);
	const todoData = [
		{ id: 1, title: 'Hooks', description: 'Create CRUD app with React Hooks', priority: 'High' },
		{ id: 2, title: 'Class', description: 'Create CRUD app w/o React Hooks', priority: 'Low' },
		{ id: 3, title: 'RR', description: 'Create CRUD app with Hooks + Redux', priority: 'Medium' },
	];

	const [todos, setTodos] = useState(todoData);
	const [isOpenDlg , setisOpenDlg] = useState(false);

	const addTodo = (todo) => {		
		todo.id = todos.length + 1;
		setTodos([...todos, todo]);
	}

	const deleteTodo = (id) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}
	return (
		<Fragment>
			<Typography component="h1" variant="h6">{value.name}</Typography>
			<TodoDialog open={isOpenDlg} addTodo={addTodo} isOpenDlg={setisOpenDlg}/>
			<ToDoList 
				todos={todos}
				deleteTodo={deleteTodo}
			/>
			<Button color="primary" variant="contained" onClick={()=> setisOpenDlg(true)}>addTodo</Button>
		</Fragment>
	)
}

export default Dashboard;