import React from "react";
import "./App.css";

import Spacer from "./components/Spacer";
import Title from "./components/Title";
import CharacterDisplay from "./components/CharacterDisplay";
import CharacterAnswers from "./components/CharacterAnswers";

import Alphabet from "./alphabet";

function App() {
  const [selectedAlphabet, setSelectedAlphabet] = React.useState("hiragana");
  const alphabet = new Alphabet(selectedAlphabet);

  const [randomCharacter, setRandomCharacter] = React.useState(
    alphabet.getRandomCharacter()
  );

  const nextCharacter = () => {
    setRandomCharacter(alphabet.getRandomCharacter());
  };

  React.useEffect(() => {
    nextCharacter();
  }, [selectedAlphabet])

  return (
    <div className={"app"}>
      <Title alphabet={{selectedAlphabet, setSelectedAlphabet}}/>
      <CharacterDisplay character={randomCharacter.character} />
      <Spacer />
      <CharacterAnswers
        character={randomCharacter.character}
        possibleAnswers={randomCharacter.possibleAnswers}
        nextCharacter={nextCharacter}
      />
    </div>
  );
}

export default App;
