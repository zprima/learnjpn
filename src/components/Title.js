import React from "react";

function Title(props) {
  const alphabet = props.alphabet;
  const options = ["hiragana", "katakana", "all"];

  return (
    <div className={"flex flex-center"}>
      <div className={"vstack"}>
        <h1>Japanese {alphabet.selectedAlphabet}</h1>
        <div className={"hstack flex-center"}>
          {options.map((item, i) => {
            return (
              <div
                key={i}
                className="alphabet-option"
                onClick={e => alphabet.setSelectedAlphabet(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Title;
