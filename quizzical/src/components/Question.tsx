import { FC, useEffect, useState } from "react";

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

  return (
    <fieldset>
      <legend>
        <h2>{decodeHtml(question)}</h2>
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
              />
              <label htmlFor={answerId}>
                {decodeHtml(answer)}
                {submitted && answer === correctAnswer && (
                  <span> - correct answer</span>
                )}
                {submitted &&
                  answer === selectedAnswer &&
                  answer !== correctAnswer && <span> - incorrect answer</span>}
              </label>
            </div>
          );
        })}
      </legend>
    </fieldset>
  );
};

export default Question;
