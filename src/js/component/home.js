import React, { useState } from "react";
import TasksList from "./TasksList";

export function Home() {
	const [task, setTask] = useState("");
	const [tasksList, setTasksList] = useState([]);
	const [cantTasks, setCantTasks] = useState(0);

	function addTask(event) {
		event.preventDefault();
		setTask("");
		if (task != "") {
			tasksList.push(task);
			setCantTasks(cantTasks + 1);
		}
	}

	function removeTask(pos) {
		tasksList.splice(pos, 1);
		setCantTasks(cantTasks - 1);
	}

	return (
		<div className="container text-left mt-4">
			<h1 className="text-center">To-do list</h1>
			<div className="container col-6 shadow justify-content-center">
				<div className="card-body border-bottom">
					<form action="" onSubmit={addTask}>
						<input
							type="text"
							className="form-control border border-white"
							id="task"
							placeholder="Add a new task"
							onChange={event => {
								setTask(event.target.value);
							}}
							value={task}
						/>
					</form>
				</div>
				<TasksList tasksList={tasksList} removeFromList={removeTask} />
				<div className="card-body">
					<p className="text-left">
						{cantTasks === 0
							? " "
							: cantTasks === 1
							? `${cantTasks} task remaining`
							: `${cantTasks} tasks remaining`}
					</p>
				</div>
			</div>
		</div>
	);
}
