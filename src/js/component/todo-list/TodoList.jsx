import React from "react";
import "./TodoList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'; 



const TodoList = ({tasks,removeTask}) =>{

    return(
        <>
		<div className="myList">
			<ul className="list-group">
				{tasks.map((task,index)=>{
					return(<li key={index} className="list-group-item text-light myTask p-3 mb-3 bg-dark rounded-pill">
						{task} 
					<button className="btn btn-secondary removeBtn" onClick={() => removeTask(index)}> 
						<FontAwesomeIcon icon={faTrashCan} />
					</button>
					</li>
				)})}
			</ul>
		</div>
        </>
    );
}

export default TodoList;    