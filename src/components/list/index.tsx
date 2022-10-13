import React from "react"
import type { TaskType } from "interfaces"
import { Grid } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

interface Props {
    tasks: TaskType[]
}

const List: React.FC<Props> = ({ tasks }) => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
        { field: 'deadline', headerName: 'Deadline', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 }
      ];
      const rows = tasks;

    return (
        <Grid wrap="nowrap" width="900px" height="500px" container>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Grid>
    );
}

export default List