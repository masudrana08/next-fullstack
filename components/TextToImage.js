"use client"
import { server } from '@config'
import React, { useState } from 'react'

function TextToImage() {
  const [prompt, setPrompt] = useState('')
  const [image, setImage] = useState({})
  const generateImage = () => {
    fetch(server+'/api/generate-image', {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(prompt)
    })
    .then(res=>res.json())
    .then(res=>{
      setImage(res)
      console.log(res);
    })
  }
  return (
    <div>
      <div>
      <input type="text" placeholder='text to image' onChange={e=>setPrompt(e.target.value)} />
      <button onClick={generateImage}>Generate</button>
      </div>
     {
      image.output && 
      <div>
      <img style={{height:`${image.meta.H || 1024}px`, width:`${image.meta.W || 1024}px`}} src={image.output[0]} alt="No Image" />
    </div>
     }
    </div>
  )
}

export default TextToImage