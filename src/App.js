import React from 'react';
import './App.css'
import { useState } from 'react';

function App() {
  
  const [weight,setWeight]= useState("");
  const [height,setHeight]= useState("");
  const [bmi,setBmi]= useState(' ');
  const [message, setMessage]= useState('');


let calcBmi =(event)=>{
  event.preventDefault()

  if(weight === 0 || height === 0){
  alert('please enter a valid weight and height');
}
else{
  let bmi = ((weight*10000)/(height*height));
  setBmi(bmi.toFixed(1));


  if(bmi < 25){
    setMessage('you are underWeight');
  }else if (bmi >= 25 && bmi<30){
setMessage('you are a healthy weight');
  }else {
    setMessage('you are overweight');
  }
}
}

   
let imgSrc;

if (bmi < 1){
  imgSrc = null
}else{
  if(bmi < 25){
   imgSrc = require ('../src/img/underweight.png');
  }else if (bmi >= 25 && bmi<30){
    imgSrc = require ('../src/img/healthy.png');
  }else{
    imgSrc = require ('../src/img/overweight.png');
  }
}

  let reload =()=>{
    window.location.reload();
  }

  return (
    <div className='app'>
      <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight(kg)</label>
          <input value={weight} onChange={(event)=>setWeight(event.target.value)}/>
        </div>
        <div>
          <label>Height(cm)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)}/>
        </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
      <div className='center'>
        <h3>Your BMI is:{bmi}</h3>
        <p>{message}</p>
      </div>
      <div className='img-container'>
        <img src ={imgSrc} alt=''></img>
      </div>
    </div> 
    </div>
  );
}

export default App;