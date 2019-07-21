import React from "react";
import PossibleAnswer from './PossibleAnswer';

function CharacterAnswers(props) {
  const submitAnswer = jpn => {
    if (props.character.jpn === jpn) {
      props.nextCharacter();
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={"flex flex-center"}>
      <div className={"hstack"}>
        {props.possibleAnswers.map((item, i) => {
          return (
            <PossibleAnswer key={i} item={item} submitAnswer={submitAnswer} />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterAnswers;

