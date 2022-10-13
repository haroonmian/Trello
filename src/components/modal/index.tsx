import React, { memo, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useStore } from "../../store";
import { removeTask, setTask, updateTask } from "../../store/actions";
import { GroupType, TaskType } from "../../interfaces/index";
import ImageUploader from "../../components/imageUploader";
import SaveIcon from "@mui/icons-material/Save";
import CustomSelect from "../../components/select";

interface formValues {
  name: string;
  description: string;
  deadline: string;
  images: any;
}

interface IModalProps {
  task?: TaskType;
  IsModalOpened: any;
  onCloseModal: any;
  group?: GroupType;
}

const BasicModal: React.FC<IModalProps> = memo(
  ({ task, IsModalOpened, onCloseModal, group }) => {
    const { state, dispatch } = useStore();
    const statuses = state.statuses;
    const [initialStatus, setInitialStatus] = useState<number>(task?.status ? task?.status : 1);

    const initialValues: formValues = {
      name: task?.name || "",
      description: task?.description || "",
      deadline: task?.deadline || "",
      images: task?.images || "",
    };

    const validationSchema = Yup.object().shape({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      deadline: Yup.string().required("Required"),
    });

    const onSubmit = (values: TaskType) => {
      const createTask = {
        id: Math.random(),
        name: values.name,
        description: values.description,
        deadline: values.deadline,
        status: 1,
        groupDto: group,
      };
      task
        ? dispatch(
            updateTask({
              id: task?.id,
              name: values.name,
              description: values.description,
              deadline: values.deadline,
              status: initialStatus ,
              groupDto: task?.groupDto,
            })
          )
        : dispatch(setTask(createTask));
      onCloseModal();
    };

    function onModalClose() {
      onCloseModal();
    }

    const deleteCard = () => {
      task && dispatch(removeTask(task));
      onCloseModal();
    };

    const handleChange = (value: any) => {
      setInitialStatus(value);
    };

    return (
      <>
        <Modal
          open={IsModalOpened}
          onClose={onModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              style={{ width: "100%" }}
            >
              {(props: any) => {
                return (
                  <Form>
                    <Grid display="flex" justifyContent="space-between">
                      <Typography variant="h4">
                        {task ? "Edit Task" : "Add new Task"}
                      </Typography>
                      <Box>
                        {task && (
                          <Button style={deleteBtnstyle} onClick={deleteCard}>
                            <DeleteOutlineIcon />
                          </Button>
                        )}
                        <Button
                          type="submit"
                          disabled={props.isSubmitting}
                          style={btnstyle}
                          fullWidth
                        >
                          <SaveIcon />
                        </Button>
                      </Box>
                    </Grid>
                    <Grid container>
                      <Grid item xs={8} pr={4} pt={2}>
                        <label>Name</label>
                        <Field
                          as={TextField}
                          variant="standard"
                          name="name"
                          placeholder="Enter Name"
                          fullWidth
                          InputProps={{
                            disableUnderline: true,
                          }}
                          style={{ marginBottom: "20px", paddingLeft: "5px" }}
                        />
                        <label>Description</label>
                        <Field
                          as={TextareaAutosize}
                          name="description"
                          placeholder="Enter description"
                          variant="standard"
                          style={{
                            marginBottom: "10px",
                            width: "100%",
                            height: "80px",
                            padding: "10px",
                            border: "none !important",
                          }}
                        />
                        <h5>Attachments </h5>
                        <ImageUploader />
                      </Grid>
                      <Grid item xs={4}>
                        <label>Status</label>
                        <CustomSelect
                          menues={statuses}
                          initialValue={initialStatus}
                          handleChange={handleChange}
                        />
                        <label>Deadline</label>
                        <Field
                          as={TextField}
                          name="deadline"
                          placeholder="Enter deadline"
                          fullWidth
                          type="date"
                          style={{ marginBottom: "15px", border: "none" }}
                        />
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Modal>
      </>
    );
  }
);

export default BasicModal;

const btnstyle = { width: "20px", color: "" };
const deleteBtnstyle = { width: "20px", color: "#be4e4e" };

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};
