import React, { memo } from "react";
import { Card, Container, Grid } from "@mui/material";
import { useStore } from "../../store";
import Group from "../../components/group";
import { useNavigate } from "react-router-dom";
import { RoutesConstent } from "../../constants/routes";
import AddIcon from "@mui/icons-material/Add";

const Home = memo(() => {
  const { state } = useStore();
  const { groups } = state;
  const navigate = useNavigate();

  const onGroup = (id?: number) => {
    navigate(RoutesConstent.board + id);
  };

  const addGroup = () => {
    navigate(RoutesConstent.addGroup);
  };

  return (
    <Container
      style={{ padding: "2rem", margin: 0, maxWidth: "50%", display: "flex" }}
    >
      <Grid container>
        {groups.map((group) => (
          <Group key={group.id} onClick={onGroup} {...group} />
        ))}
      </Grid>
      <Grid container>
        <Grid className="group" onClick={addGroup} item>
          <Card style={{ padding: "1rem", margin: "1rem", height: "120px" }}>
            <Grid
              container
              style={{
                padding: "0.5rem 0",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AddIcon data-testid="group-name" />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
});

export default Home;
