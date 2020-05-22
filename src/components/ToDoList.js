import React from 'react';

//Material Components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ToDoList = ( props ) => {

	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell align="left">Title</TableCell>
						<TableCell align="left">Priority</TableCell>
						<TableCell align="left">Due date</TableCell>
						<TableCell align="left">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						props.todos.map((todo, index) => (
							<TableRow key={index}>
								<TableCell component="th" scope="todo">
									{index}
								</TableCell>
								<TableCell align="left">{todo.title}</TableCell>
								<TableCell align="left">{todo.description}</TableCell>
								<TableCell align="left">{todo.duedate}</TableCell>
								<TableCell align="left">
									<button>Edit</button>
									<button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
								</TableCell>
							</TableRow>
						))
				}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default ToDoList;
