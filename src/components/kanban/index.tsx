import { Grid } from "@mui/material";
import React from "react";
import { useStore } from "../../store";
import BoardStrips from "./strips";
import type { TaskType, StatusType } from "../../interfaces";
import { updateTaskOnDrag } from "../../store/actions";

interface Props {
  tasks: TaskType[];
  statuses: StatusType[];
}

const Kanban: React.FC<Props> = ({ tasks, statuses }) => {
    const { dispatch } = useStore();
    function allowDrop(ev: any) {
      ev.preventDefault();
    }
    
    function drop(e: any, status: any) {
      e.preventDefault();
      var data = e.dataTransfer.getData("roadrCard");
      e.target.appendChild(document.getElementById(data)); 
      let response = localStorage.getItem("dragCard");
      let card = response && JSON.parse(response);
        dispatch(updateTaskOnDrag({...card, status: status.id}))      
    }
    
  return (
    <Grid
      wrap="nowrap"
      overflow="auto"
      width="100%"
      display="flex"
      justifyContent="center"
      container
    >
      {statuses.map((status, index:number) => (
        <div key={index} id={`div${index}`} onDrop={(e) => drop(e, status)} onDragOver={allowDrop}>
          <BoardStrips key={index} tasks={tasks} status={status} />
        </div>
      ))}
    </Grid>
  );
};

export default Kanban;
