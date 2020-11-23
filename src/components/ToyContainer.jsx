import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({toys, setToyState, deleteToy}) => {
  
  const addLike = (id) =>{
    let newArray= [...toys]
    let toyIndex = newArray.findIndex((toyObj) => toyObj.id === id)
    let toyElement = newArray[toyIndex]
    toyElement.likes = toyElement.likes + 1 
    setToyState(newArray)
  }
  const renderToys = () => {
    return toys.map((el) => <ToyCard key={el.id} name={el.name} image={el.image} likes={el.likes} addLike={addLike} id={el.id} deleteToy={deleteToy}/>)
  }
  return(
    <div id="toy-collection">
      {renderToys()}
    </div>
  );
}

export default ToyContainer;
