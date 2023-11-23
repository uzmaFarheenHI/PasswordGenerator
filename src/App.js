import './App.css'
// my designing part got over its time of doing something logical thing lets start..
import {useEffect, useState} from 'react'

function App() {
const [sliderInput,setSliderInput]=useState(4);// got the vsaue and set this with respect to the length adnd all lets do some other things over here
const [checkbox,setCheckBoxs]=useState(new Array(4).fill(false));// its your choice how u want to do this since everyhting is same kind of element its better u will in error its formations which is clicked and like wise if i would have taken map probably chances of getting updated might be more
const [password,setPassword]=useState("");

const handlerSlider=(event)=>{
setSliderInput(event.target.value)
}

const setCheckBoxes=(event)=>{
 let id=event.target.getAttribute('data-id');// this pa
let array=[...checkbox];
array[id-1]=!array[id-1];
setCheckBoxs(array);
}

const handleButton=()=>{
let charset="";
for(let i=0;i<checkbox.length;i++)
{
  if(checkbox[i]===true)
  {
  let id=i+1;
  console.log("I am Executing")
      switch(id)
      {
        case 1:charset=charset+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";// in switch statement its very important to have the strong types value not neccessry that it should be string only it  can be anything..
        break;
        case 2:charset=charset+"abcdefghijklmnopqrstuvwxyz";
        break;
        case 3:charset=charset+"0123456789"
        break;
        case 4:charset=charset+"!@#$%^&*()_+{}:><?/~`";
        break;
        default:
          charset=charset+"";
      }
    }
}
let newPassword="";
for(let i=0;i<sliderInput;i++)
{
   let idx=Math.floor(Math.random()*charset.length);// Math.floor(place-->)
   newPassword=newPassword+charset[idx];
}
setPassword(newPassword);
}
  return (
    <div className="container">
      <h1 className="heading">Password Generator</h1>
      <div className="password-generator-container">
          {password&&<div className="password" style={{textAlign:"center",fontSize:"2rem"}}>{password}             
          </div>}
            <input type="range" className="slider" min="0" max="32" value={sliderInput} onChange={handlerSlider}/>
            <h2 style={{fontSize:"2rem",textAlign:"center"}}>{sliderInput}</h2>
          <div className="checkbox" >
            <div className="checkbox-1">
              <div className="check1">
              <input type="checkbox" data-id="1" onChange={setCheckBoxes}/>
              <span>Include Uppercase Letters</span>
              </div>
              <div className="check1">
              <input type="checkbox" data-id="2" onChange={setCheckBoxes}/>
              <span>Include LowerCasecase Letters</span>
              </div>
            </div>
            <div className="checkbox-1">
              <div className="check1">
              <input type="checkbox" data-id="3" onChange={setCheckBoxes}/>
              <span >Include Numbers</span>
              </div>
              <div className="check1">
              <input type="checkbox" data-id="4" onChange={setCheckBoxes}/>
              <span >Include Symbols</span>
              </div>
            </div>
          </div>
          <button className="btn" onClick={handleButton} >
            Generate Password
          </button>
      </div>
    </div>
  );
}
export default App;
