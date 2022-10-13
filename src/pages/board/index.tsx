import React, { memo, useState } from "react";
import { Container, Grid, Select, MenuItem, Button } from "@mui/material";
import { useStore } from "../../store";
import Kanban from "../../components/kanban";
import List from "../../components/list";
import { useParams } from "react-router-dom";
import BasicModal from "../../components/modal";
import { useNavigate } from "react-router-dom";
import { RoutesConstent } from "../../constants/routes";

interface Props {}

const Home: React.FC<Props> = memo(() => {
  const { state } = useStore();
  const [boardType, setBoardType] = useState<Number>(1);
  const params = useParams();
  const tasks = state?.tasks?.filter(
    (task) => task?.groupDto?.id === Number(params.groupId)
  );
  let navigate = useNavigate();
  const filteredGroup = state.groups.find(
    (group) => group.id === Number(params.groupId)
  );

  const handleChange = (e: any) => {
    setBoardType(e.target.value);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openFromParent = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const navigateToGroups = () => {
    navigate(RoutesConstent.home);
  };

  return (
    <Container style={{ padding: "2rem", margin: 0, maxWidth: "100%" }}>
      <Grid
        paddingRight={2}
        width="950px"
        margin="auto"
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item xs={2}>
          <Select
            value={boardType}
            label="Select Board"
            onChange={handleChange}
          >
            <MenuItem value={1}>Kanban</MenuItem>
            <MenuItem value={2}>List</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={navigateToGroups}>back</Button>
        </Grid>
        <Grid item xs={8}>
          <Button sx={{ float: "right" }} onClick={openFromParent}>
            Add Task
          </Button>
        </Grid>
      </Grid>
      <BasicModal
        group={filteredGroup}
        IsModalOpened={modalIsOpen}
        onCloseModal={handleCloseModal}
      />
      <Grid justifyContent="center" container>
        {boardType === 1 ? (
          <Kanban tasks={tasks} statuses={state.statuses} />
        ) : (
          <List tasks={tasks} />
        )}
      </Grid>
    </Container>
  );
});

export default Home;
