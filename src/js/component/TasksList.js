import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TasksList(props) {
	return (
		<>
			<ul className="list-group list-group-flush">
				{props.tasksList.map((task, index) => {
					return (
						<li key={index} className="list-group-item">
							<div className="row">
								<div className="col">{task}</div>
								<div className="col-1 text-right">
									<button
										type="button"
										className="close"
										aria-label="Close"
										onClick={() => {
											props.removeFromList(index);
										}}>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}

TasksList.propTypes = {
	tasksList: PropTypes.array,
	removeFromList: PropTypes.func
};
