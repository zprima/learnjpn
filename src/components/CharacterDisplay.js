import React from 'react';

function CharacterDisplay(props){
  
  return(
    <div className={"flex flex-center"}>
      <div className={"vstack"}>
        <div className={"charDisplay"}>{props.character.jpn}</div>
      </div>
    </div>
  )
}

export default CharacterDisplay;