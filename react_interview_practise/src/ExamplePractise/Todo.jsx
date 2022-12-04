import React, { useState } from "react";
import { useEffect } from "react";

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
    }).then((r) => fetchData(r));
  };

  //// fetching data
  const fetchData = () => {
    fetch(`http://localhost:8080/todos`, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((d) => setTodo(d))
      .catch((er) => console.log("er in fetch", er));
  };

   //// deleting data
   const handleDelete=(id)=>{
    fetch(`http://localhost:8080/todos/${id}`,{
        method:'DELETE',
        'content-type':'application/json'
    }).then(d=>fetchData(d))
   }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* add todo HTML part */}
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
          onChange={handleChange}
          name="title"
          autoComplete="off"
          style={{ width: "100px", height: "30px" }}
        />
        <input
          type="url"
          onChange={handleChange}
          name="image"
          autoComplete="off"
          style={{ width: "100px", height: "30px" }}
        />
        <button onClick={addTodo} style={{ width: "60px", height: "35px" }}>
          ADD
        </button>
      </div>

      <div
        style={{
          width: "50%",
          margin: "auto",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          gap: "10px",
        }}
      >
        {todo?.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                width: "100%",
                height: "fit-content",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
                  <img
                src={item.image}
                alt={item.title}
                style={{ width: "50px", height: "50px" }}
              />
              <p>{item.title}</p>
              <button onClick={()=>handleDelete(item.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
