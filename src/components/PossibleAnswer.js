import React from 'react';


function PossibleAnswer(props) {
  const [answerStatusColor, setAnswerStatusColor] = React.useState(
    "answer-default"
  );

  function check(jpn) {
    const result = props.submitAnswer(jpn);
    if (!result) {
      setAnswerStatusColor("answer-wrong");
    }
  }

  React.useEffect(() => {
    setAnswerStatusColor("answer-default");
  }, [props.item])

  return (
    <div
      data-neki={props.item.jpn}
      className={"possible-answer " + answerStatusColor}
      onClick={e => check(props.item.jpn)}
    >
      {props.item.en}
    </div>
  );
}

export default PossibleAnswer;