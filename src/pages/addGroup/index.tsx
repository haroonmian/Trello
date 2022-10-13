import React, { memo } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useStore } from "../../store";
import { setGroup } from "../../store/actions";
import {  useNavigate } from "react-router-dom"
import { RoutesConstent } from "../../constants/routes";

interface formValues {
  name: string;
  description: string;
}
interface Props {}

const AddGroup: React.FC<Props>  = memo(() => {
  const initialValues: formValues = {
    name: "",
    description: "",
  };
  const { dispatch } = useStore();
  let navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });

  const onSubmit = (
    values: any,
    props: { resetForm: () => void; setSubmitting: (arg0: boolean) => void }
  ) => {
    const group = {
      id: Math.random(),
      name: values.name,
      description: values.description,
    };
    dispatch(setGroup(group));
    navigate(RoutesConstent.dashboard)
  };

  return (
    <>
      <Paper style={paperStyle}>
        <Grid>
          <h2>Add new Group</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props: any) => {
            return (
              <Form>
                <Field
                  as={TextField}
                  label="Name"
                  name="name"
                  placeholder="Enter username"
                  fullWidth
                  style={{ marginBottom: "15px" }}
                />
                <Field
                  as={TextField}
                  label="Description"
                  name="description"
                  placeholder="Enter description"
                  fullWidth
                  style={{ marginBottom: "15px" }}
                />
                <Button
                  type="submit"
                  data-testid="grp-sub"
                  color="primary"
                  variant="contained"
                  disabled={props.isSubmitting}
                  style={btnstyle}
                  fullWidth
                >
                  {props.isSubmitting ? "Loading" : "Add"}
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Paper>
    </>
  );
});

export default AddGroup;


const paperStyle = {
  padding: 20,
  height: "450px",
  width: 350,
  margin: "85px auto 0 auto",
  border: 1,
  borderColor: "red",
};
const btnstyle = { marginTop: "95px" };