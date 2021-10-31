import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/UseAuth";

const PlaceOrder = () => {
  const { placeId } = useParams();
  const [place, setPlace] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://ancient-hollows-54145.herokuapp.com/placeorder/${placeId}`)
      .then((res) => res.json())
      .then((data) => setPlace(data));
    //   {alert("pleaase confirm your email")}
  }, []);
  const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        axios.post('https://ancient-hollows-54145.herokuapp.com/order',data)
        .then(res=>console.log(res))
        // console.log(data);
  };
  return (
    <div>
      <h2>Please Place your order</h2>
      <h2>{place.name} </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} defaultValue={user.email} required /> <br />
          <input {...register("address")} required />
          <br />
          <input {...register("phoneNumber")} required />
          <br />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
