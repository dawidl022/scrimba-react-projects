import { nanoid } from "nanoid";
import { FC, FormEvent, useEffect, useState } from "react";
import Question from "../components/Question";
import "./Quiz.scss";

interface OpenTDBResponse {
  results: TriviaResponseQuestion[];
}

interface TriviaResponseQuestion {
  type: "multiple" | "boolean";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface TriviaQuestion {
  id: string;
  type: "multiple" | "boolean";
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

interface UserAnswers {
  [key: string]: string;
}

const QUESTION_COUNT = 5;

const Quiz: FC = () => {
  const [questions, setQuestions] = useState<TriviaQuestion[]>();
  const [submitted, setSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});

  const fetchQuestions = (amount: number = QUESTION_COUNT) => {
    const response: Promise<OpenTDBResponse> = fetch(
      `https://opentdb.com/api.php?amount=${amount}`
    ).then(res => res.json());

    response.then(res =>
      setQuestions(
        res.results.map(q => ({
          ...q,
          id: nanoid(),
          correctAnswer: q.correct_answer,
          incorrectAnswers: q.incorrect_answers,
        }))
      )
    );
  };

  useEffect(fetchQuestions, []);

  const checkAnswers = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
  };

  const selectAnswer = (questionId: string, answer: string) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const numberOfAnswersCorrect = (): number =>
    questions?.reduce(
      (score, q) => score + (userAnswers[q.id] === q.correctAnswer ? 1 : 0),
      0
    ) ?? 0;

  const resetQuiz = () => {
    setQuestions(undefined);
    fetchQuestions();
    setSubmitted(false);
    setUserAnswers({});
  };

  return questions ? (
    <form onSubmit={checkAnswers} className="quiz">
      {questions.map(q => (
        <Question
          key={q.id}
          {...q}
          selectAnswer={value => selectAnswer(q.id, value)}
          selectedAnswer={userAnswers[q.id]}
          submitted={submitted}
        />
      ))}
      <div className="bottom">
        {submitted ? (
          <>
            <span className="results">
              You scored {numberOfAnswersCorrect()}/{QUESTION_COUNT} correct
              answers
            </span>
            <button type="button" onClick={resetQuiz} className="basic-btn">
              Play again
            </button>
          </>
        ) : (
          <button type="submit" className="basic-btn">
            Check answers
          </button>
        )}
      </div>
    </form>
  ) : (
    <span className="loading">Loading...</span>
  );
};

export default Quiz;
