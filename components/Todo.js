"use client"
import { server } from "@config";
import { useState } from "react";
import axios  from 'axios'
export default function Todo() {
  const [text, setText] = useState("");
  const handleSubmit = () => {
    console.log('clicked');
    // const url = server+'/api/todo';
    // const data = {text};
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    // axios.post(url, data, config)
    // .then(response => {
    //     // Handle the response
    //     console.log(response.data);
    // })
    // .catch(error => {
    //     // Handle any errors that occur during the request
    //     console.error(error);
    // })
    fetch(server+"/api/todo", {
        method:'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text}),
    })
    .then(res=>{
        console.log(res, 'saved');
    })

  };
  return (
    <div>
      <div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Type your text.."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
