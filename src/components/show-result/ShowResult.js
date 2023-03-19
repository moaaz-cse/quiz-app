import classes from "./ShowResult.module.scss";
import questions from "../question-List/Question";
import successSvg from "../../assets/success.svg";
const ShowResult = (props) => {
  const answeredList = props.answeredList;
  const correctAnswer = questions.map((question) => question.answer);
  const matchedAnswer = answeredList.filter((ans, index) => {
    if (ans === correctAnswer[index]) {
      return ans;
    }
  });
  const result = ((matchedAnswer.length / correctAnswer.length) * 100).toFixed(
    2
  );
  console.log(result);
  return (
    <div className={classes.result}>
      <img src={successSvg} className={classes.success} />
      <p className={classes.message}>You have successfully submitted the Assessment</p>
      <p className={classes.details}>-Questions asked: {correctAnswer.length}</p>
      <p className={classes.details}>-Question correct: {matchedAnswer.length}</p>
      <p className={classes.details}>-Your score: {result}</p>
    </div>
  );
};
export default ShowResult;
