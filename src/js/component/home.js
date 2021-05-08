/*import React { useState } from "react";
import Lista from "./Lista";

//create your first component
export function Home() {
    const [task, setTask] = useState("");
    const [lista, setLista] = useState([]);
    const [cantTasks, setCantTasks] = useState(0);

    function addTask(event) {
        event.preventDefault();
        setTask("");
        if (cantTasks < 8 && task != "") {
            lista.push(task);
            setCantTasks(cantTasks + 1);
        }
    }

    return (
        <div className="container text-center mt-5 col-4">
            <h1>To-dos</h1>
            <form onSubmit={addTask}>
                <div className="form-row align-items-center">
                    <div className="container">
                        <label className="sr-only" for="inlineFormInputName">
                            Name
						</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputName"
                            placeholder={
                                tasksList.length > 0
                                    ? "Add a new task"
										}
                            onChange={event => {
                                setTask(event.target.value);
                            }}
                            value={task}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

<ul className="list-group">
					<li className="list-group-item">An item</li>
					<li className="list-group-item">A second item</li>
					<li className="list-group-item">A third item</li>
					<li className="list-group-item">A fourth item</li>
					<li className="list-group-item">And a fifth one</li>
                </ul>*/
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
		<div className="container text-left">
			<h1 className="text-center">To-do list</h1>
			<div className="card brown shadow">
				<div className="card-body">
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
