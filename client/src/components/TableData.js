import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";


function TableData() {
  const [show,setShow] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const temp = await axios.get("https://t0do-server.onrender.com/");
        setShow(temp.data);
      } catch (error) {
        console.log("error in axios call", error);
      }
    };
    getAllData();
  });


  const handleDelete =async(id) =>{
      console.log(id);
      console.log("delete icon clicked");
      await axios.delete('http://localhost:5000/',{data:{"elementId":id}})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
  }

const handleEdit =async(id,tShow) =>{
      console.log(id);
      console.log(tShow);
    const editData = prompt("Edit Task","");
    if(editData===null){return;}
    await axios.delete('http://localhost:5000/',{data:{"elementId":id}})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
    await axios.post('http://localhost:5000/',{"text":editData})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
    
    
  }

  var i = 1;
return (
  <table className="container table table-striped pb-4">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
    <tbody>
      {show.map((itemObj) => (
        <tr key={itemObj._id}>
          <th scope="row">{i++}</th>
          <td>{itemObj.text}</td>
          <td><i style={{cursor:"pointer"}} className="bi bi-pencil-square" onClick={()=>handleEdit(itemObj._id,itemObj.text)}></i></td>
          <td><i style={{cursor:"pointer"}} className="bi bi-trash3-fill" onClick={()=>handleDelete(itemObj._id)}></i></td>
        </tr>
      ))}
    </tbody>
  </table>
);
}

export default TableData;
