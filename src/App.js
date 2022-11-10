
import {React,useEffect,useState} from 'react';
import "./styles.css"
import heater1 from './audios/Heater-1.mp3'
import heater2 from './audios/Heater-2.mp3'
import heater3 from './audios/Heater-3.mp3'
import heater4 from './audios/Heater-4_1.mp3'
import heater6 from './audios/Heater-6.mp3'
import cev from './audios/Cev_H2.mp3'
import dsc from './audios/Dsc_Oh.mp3'
import kickandhat from './audios/Kick_n_Hat.mp3'
import Rp from './audios/RP4_KICK_1.mp3'
function App() {
 
  useEffect(() => {
    document.addEventListener('keydown',(e)=>
    {handleClick(e.key.toUpperCase())})
    },[])



  const audios = [
    {
      keyCode: 81,
      id: "Q",
      src: heater1,
      name:"Heater 1"
    },
    {
      keyCode: 87,
      id: "W",
      src: heater2,
   name:"Heater 2"
    },
    {
      keyCode: 69,
      id: "E",
      src: heater3,
      name:"Heater 3"
    },
    {
      keyCode: 65,
      id: "A",
      src: heater4,
     name:"Heater 4"
    },
    {
      keyCode: 83,
      id: "S",
      src: heater6,
      name:"Clap"
    },
    {
      keyCode: 68,
      id: "D",
      src: cev,
name:"Open HH"
    },
    {
      keyCode: 90,
      id: "Z",
      src: dsc,
      name:"Kixk and hat"
    },
    {
      keyCode: 88,
      id: "X",
      src: kickandhat,
     name:"Kick"
    },
    {
      keyCode: 67,
      id: "C",
      src: Rp,
name:"Closed HH"
    }
  ];
  let [tune,setTune] =useState("Heater Kit");
 

function handleClick(selector)
  {
   const audio=document.getElementById(selector)
   
   console.log(selector)
   console.log(audio)
   audio.play()
   setTune(audio.getAttribute("name"))
   // eslint-disable-next-line no-lone-blocks
 
  }

  return (
    
    <div id="drum-machine">
      
      <div id="display">
      
     {audios.map(x=>
     <button key={x.keyCode } className="drum-pad" id={x.src} onClick={() =>{handleClick(x.id)}}>
       {x.id}
       <audio className="clip" name={x.name} id={x.id} src={x.src}></audio>
       </button>)}
      <p className="hit">{tune}</p> 
    </div>
    </div>
   
  );
}

export default App;
