import classes from "./ShowQuestion.module.scss";
import questions from "../question-List/Question";
import { useEffect, useState } from "react";
import questionMarkSVG from "../../assets/questionMark.svg";
import nextSvg from "../../assets/next.svg";
import prevSvg from "../../assets/prev.svg";
import MarkedAnswers from "../marked-answers/MarkedAnswers";
import ShowResult from "../show-result/ShowResult";

let selectedAnswere = [];
const ShowQuestion = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState();
  const [selectedChanged, setSelectedChanged] = useState(true);
  const [displayResult, setDisplayResult] = useState(false);

  const prevQuestionHandler = () => {
    if (questionNumber > 0) {
      setQuestionNumber((questionNumber) => --questionNumber);
    }
  };
  const nextQuestionHandler = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((questionNumber) => ++questionNumber);
    }
  };
  const selectedHandler = (event) => {
    setSelectedOptions(event.target.value);
  };
  const showResulHandler = (event) => {
    event.preventDefault();
    setDisplayResult(!displayResult);
  };
  useEffect(() => {
    if (selectedOptions !== undefined) {
      selectedAnswere[questionNumber] = selectedOptions;
      setSelectedChanged(!selectedChanged);
    }
  }, [selectedOptions]);
  return (
    <section className={classes.main}>
      <MarkedAnswers
        answeredList={selectedAnswere}
        displayList={displayResult}
      />
      {!displayResult && (
        <form className={classes.form} onSubmit={showResulHandler}>
          <img src={questionMarkSVG} className={classes.questionMark} />
          <div className={classes.change}>
            {questionNumber !== 0 && (
              <button
                type="button"
                onClick={prevQuestionHandler}
                className={`${classes.prev} ${classes.btn}`}
              >
                <img src={prevSvg} />
              </button>
            )}
            <h1>Attempt Qustion Here</h1>
            {questionNumber !== questions.length - 1 && (
              <button
                type="button"
                onClick={nextQuestionHandler}
                className={`${classes.next} ${classes.btn}`}
              >
                <img src={nextSvg} />
              </button>
            )}
          </div>
          <div>
            <p>
              Question#{questionNumber + 1} {questions[questionNumber].question}
            </p>
          </div>
          <div className={classes.options}>
            {questions[questionNumber].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name={option.text}
                  value={option.value}
                  onClick={selectedHandler}
                  checked={selectedAnswere[questionNumber] === option.value}
                />
                <label for={option.value} className={classes.label}>
                  {option.text}
                </label>
              </div>
            ))}
          </div>
          <input
            type="submit"
            value="Submit"
            className={`${classes.submit} ${classes.btn}`}
          />
        </form>
      )}
      {displayResult && <ShowResult answeredList={selectedAnswere} />}
    </section>
  );
};

export default ShowQuestion;
