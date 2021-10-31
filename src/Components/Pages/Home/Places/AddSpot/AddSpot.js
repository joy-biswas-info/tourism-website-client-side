import React from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddSpot.css";
import axios from "axios";

const AddSpot = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      axios.post('https://ancient-hollows-54145.herokuapp.com/places', data)
          .then(res => {
          console.log(res);
      })
  };

  return (
    <Container className="services">
      <h2>Please Add a Service </h2>
      <Row className="justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="place name"
          />{" "}
          <br />
          <input
            {...register("description")}
            placeholder="Place description"
          />{" "}
          <br />
          <input {...register("img")} placeholder="Image url" /> <br />
          <input type="number" {...register("cost")} placeholder="cost" />{" "}
          <br />
          <input type="submit" />
        </form>
      </Row>
    </Container>
  );
};

export default AddSpot;