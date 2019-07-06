import React,{Component, useState} from 'react';

function Contador(props){
  const [contador, setContador]= useState(0);
  return (
    <div>
    <p>Conteo:{contador}</p>
    <button onClick={()=>setContador(contador+1)}>Aumentar</button>
    </div>
  )
}
export default Contador;