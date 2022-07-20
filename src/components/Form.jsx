import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [input, setInput] = useState({});

  const inputHandler = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submission handled ", e);
    axios
      .post("http://localhost:8000/api/products/new", input)
      .then((response) => {
        console.log("response after submitting", response);
      })
      .catch((err) => console.log(err));

    setInput({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="from-group mb-2">
          <label>Title:</label>
          <input
            className="form-control"
            type="text"
            name="title"
            onChange={inputHandler}
          />
        </div>
        <div className="from-group mb-2">
          <label>Price:</label>
          <input
            className="form-control"
            type="number"
            name="price"
            onChange={inputHandler}
          />
        </div>
        <div className="from-group mb-2">
          <label>Description:</label>
          <input
            className="form-control"
            type="text"
            name="desc"
            onChange={inputHandler}
          />
        </div>
        <input type="submit" value="add item" />
      </form>
    </div>
  );
}
