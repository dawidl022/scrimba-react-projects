import { FC, useState } from "react";
import "./Question.scss";

interface QuestionProps {
  id: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  selectAnswer: (id: string) => void;
  selectedAnswer: string;
  submitted: boolean;
}

const Question: FC<QuestionProps> = ({
  id,
  question,
  correctAnswer,
  incorrectAnswers,
  selectAnswer,
  selectedAnswer,
  submitted,
}) => {
  const [correctAnswerIndex] = useState(
    Math.floor(Math.random() * incorrectAnswers.length)
  );

  const decodeHtml = (html: string): string => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const allAnswers = (): string[] => {
    const answers = incorrectAnswers.map(e => e);
    answers.splice(correctAnswerIndex, 0, correctAnswer);
    return answers;
  };

  const isCorrect = (answer: string): boolean =>
    submitted && answer === correctAnswer;

  const isIncorrectlySelected = (answer: string): boolean =>
    submitted && answer === selectedAnswer && answer !== correctAnswer;

  return (
    <fieldset className="question">
      <legend>
        <h2>{decodeHtml(question)}</h2>
      </legend>
      <div className="answers">
        {allAnswers().map((answer, i) => {
          const answerId = `${id}-${i}`;
          return (
            <div>
              <input
                type="radio"
                name={id}
                id={answerId}
                checked={answer === selectedAnswer}
                onChange={() => selectAnswer(answer)}
                disabled={submitted}
                className={`sr-only answer-radio-btn
                  ${isCorrect(answer) ? "correct" : ""} 
                  ${isIncorrectlySelected(answer) ? "incorrect" : ""}`}
              />
              <label htmlFor={answerId} className="answer-btn">
                {decodeHtml(answer)}
                {isCorrect(answer) && (
                  <span className="sr-only"> - correct answer</span>
                )}
                {isIncorrectlySelected(answer) && (
                  <span className="sr-only"> - incorrect answer</span>
                )}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export default Question;
