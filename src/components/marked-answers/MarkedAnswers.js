import classes from "./MarkedAnswers.module.scss";
import star from "../../assets/star.svg";
import likeThumb from "../../assets/likeThumb.svg";
const MarkedAnswers = (props) => {
  const answers = props.answeredList;
  const displayList = props.displayList;
  return (
    <>
      {!displayList && (
        <div className={classes.result}>
          <div>
            <img src={star} className={classes.like} />
            <img
              src={likeThumb}
              className={`${classes.like} ${classes.thumb}`}
            />
          </div>
          <p>Review answers here</p>
          {answers.length > 0 && (
            <ul>
              {answers.map((ans, index) => (
                <li>
                  #{index + 1}: {ans}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default MarkedAnswers;
