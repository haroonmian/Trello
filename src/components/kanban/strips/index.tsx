import React from "react";
import { Grid } from "@mui/material";
import BoardCard from "../card";
import type { TaskType, StatusType } from "interfaces";

interface Props {
  tasks?: TaskType[];
  status: StatusType;
}

const BoardStrips: React.FC<Props> = ({ tasks, status }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      {status.label}
      <Grid
        height="75vh"
        minWidth="300px"
        width="300px"
        margin="0 1rem 0 0"
        xs={3}
        style={{ background: "rgb(244, 245, 247)", paddingTop: "1rem" }}
        item
      >
        {tasks?.map((task: TaskType, index: number) =>{
         return task.status === status.id ? <BoardCard key={index} {...task} /> : null
        }
        )}
      </Grid>
    </div>
  );
};

export default BoardStrips;
