import React, { useState } from "react";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inpVal, setInpVal] = useState({
    title: "",
    image: "",
  });

  const handleChange = (e) => {
    setInpVal({ ...inpVal, [e.target.name]: e.target.value });
  };

  /// post data in todo
  const addTodo = () => {
    fetch(`http://localhost:8080/todos`, {
      method: "POST",
      body: JSON.stringify(inpVal),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <>
      {/* add todo HTML part */}
      <div
        style={{
          width: "fit-content",
          height: "80px",
          display: "flex",
          margin: "20px auto",
          justifyContent:'space-evenly',
          gap:'20px'
        }}
      >
        <input
          type="text"
          onChange={handleChange}
          name="title"
          autoComplete="off"
          style={{width:'100px',height:'30px'}}
        />
        <input
          type="url"
          onChange={handleChange}
          name="image"
          autoComplete="off"
          style={{width:'100px',height:'30px'}}
        />
        <button onClick={addTodo} style={{width:'60px',height:'35px'}}>ADD</button>
      </div>

      <div
        style={{
          width: "70%",
          margin: "auto",
          height: "fit-content",
          display: "flex",
          direction: "column",
        }}
      >
         
      </div>
    </>
  );
};
