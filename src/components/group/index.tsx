import React from "react"
import { Grid, Card } from "@mui/material"
import { GroupType } from "interfaces"

interface Props extends GroupType {
    onClick: (id?: number) => void
}

const Group: React.FC<Props> = ({ ...group }) => (
        <Grid  xs={12} sm={4} md={2}  onClick={() => group.onClick(group.id)} item>
            <Card style={{ padding: "1rem", margin: "1rem" }}>
                <Grid container style={{ padding: "0.5rem 0" }}>
                    <h5>{group.name}</h5>
                </Grid>
                <Grid container style={{ padding: "0.5rem 0" }}>
                    {group.description}
                </Grid>
            </Card>
        </Grid>
);

export default Group
