import React from 'react';
import axios from 'axios';
import { useState } from 'react' ;
  
  function DataInput () {

  const [text, setText ] = useState('');
  
  const submitHandler = async (event) => {
    event.preventDefault();
    var postData ={text};
    console.log(postData);
    await axios.post('https://t0do-server.onrender.com/',postData)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
    setText("");
  }
  
  	return (
      <>
        <div className="row mb-3 p-5 justify-content-center">
          <input
            className="col-sm-4"
            type="text"
            onChange={(e)=>{setText(e.target.value)}}
            value={text}
          ></input>
          <button
          type='submit'
            className="btn btn-primary col-sm-1 px-4"
            onClick={submitHandler}
          >
            AddTask
          </button>
        </div>
      </>
    );
}
export default DataInput;
