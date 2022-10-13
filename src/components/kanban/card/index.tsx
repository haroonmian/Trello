import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import type { TaskType } from "../../../interfaces";
import BasicModal from "../../../components/modal";

const BoardCard: React.FC<TaskType> = ({ ...card }) => {
  const drag = (e: any, dragCard: any) => {
    e.dataTransfer.setData("roadrCard", e.target.id);
    localStorage.setItem("dragCard", JSON.stringify(dragCard));
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openFromParent() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div
        draggable={true}
        onDragStart={(e) => drag(e, card)}
        id={card.id?.toString()}
        onClick={openFromParent}
      >
        <Grid width="300px">
          <Card style={{ padding: "1rem", margin: "1rem" }}>
            <Grid container style={{ padding: "0.5rem 0" , textTransform:'capitalize'}}>
              <Grid item xs={9}>
                <Typography variant="h5">{card.name}</Typography>
              </Grid>
            </Grid>
            <Grid container style={{ padding: "0.5rem 0", textTransform:'capitalize' }}>
              <Grid item xs={12}>
                {card.description}
              </Grid>
            </Grid>
            <Grid container style={{ padding: "0.5rem 0" }}>
              {card.deadline}
            </Grid>
          </Card>
        </Grid>
      </div>
      <BasicModal
        task={card}
        IsModalOpened={modalIsOpen}
        onCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default BoardCard;
