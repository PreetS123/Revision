import React, { useState, useEffect } from "react";

export const Todo1 = () => {
  const [todo, setTodo] = useState([]);
  const [inpVal, setInpVal] = useState({
    title: "",
    image: "",
  });

  //////// data posting logic ///////////

  const handleChange = (e) => {
    setInpVal({ ...inpVal, [e.target.name]: e.target.value });
  };
  const handlePosting = () => {
    fetch(`http://localhost:8080/todos`, {
      method: "POST",
      body: JSON.stringify(inpVal),
      headers: {
        "content-type": "application/json",
      },
    }).then((r) => FetchData(r));
  };

  ////////// data fetching logic start from here/////////////

  const FetchData = () => {
    fetch(`http://localhost:8080/todos`, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((d) => setTodo(d))
      .catch((er) => console.log("er in fetching", er));
  };

  useEffect(() => {
    FetchData();
  }, []);

  

  return (
    <>
      <div>
        <div
          style={{
            width: "fit-content",
            height: "80px",
            display: "flex",
            margin: "20px auto",
            justifyContent: "space-evenly",
            gap: "20px",
          }}
        >
          <input
            type="text"
            name="title"
            onChange={handleChange}
            autoComplete="off"
            style={{ width: "100px", height: "30px" }}
          />
          <input
            type="text"
            name="image"
            onChange={handleChange}
            autoComplete="off"
            style={{ width: "100px", height: "30px" }}
          />
          <button
            onClick={handlePosting}
            style={{ width: "60px", height: "35px" }}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
};
