import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the pH value of the human body?",
      answers: [
        {
          text: "9.2 to 9.8",
          correct: false,
        },
        {
          text: "7.2 to 8.2",
          correct: false,
        },
        {
          text: "5.2 to 6.8",
          correct: false,
        },
        {
          text: "7.0 to 7.8",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: " Which of the following are called Key Industrial animals?",
      answers: [
        {
          text: "Producers",
          correct: false,
        },
        {
          text: "Tertiary consumers",
          correct: false,
        },
        {
          text: "Primary consumers",
          correct: true,
        },
        {
          text: "None of these",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: " Which of the given amendments made it compulsory for the president to consent to the constitutional Amendment bills?",
      answers: [
        {
          text: "27th",
          correct: false,
        },
        {
          text: "24th",
          correct: true,
        },
        {
          text: "26th",
          correct: false,
        },
        {
          text: "29th",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of the following Himalayan regions is called Shivalik's?",
      answers: [
        {
          text: "Upper Himalayas",
          correct: false,
        },
        {
          text: "Lower Himalayas",
          correct: false,
        },
        {
          text: "Outer Himalayas",
          correct: true,
        },
        {
          text: "Inner Himalayas",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "The Samkhya School of Philosophy was founded by?",
      answers: [
        {
          text: "Gautam Buddha",
          correct: false,
        },
        {
          text: "Mahipala",
          correct: false,
        },
        {
          text: "Gopala",
          correct: false,
        },
        {
          text: "Kapila",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Pustaz grasslands are situated at?",
      answers: [
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "Hungary",
          correct: true,
        },
        {
          text: "USA",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Chelaiya Samiti is related to which of the following?",
      answers: [
        {
          text: "Banking sector",
          correct: false,
        },
        {
          text: "Health Sector",
          correct: false,
        },
        {
          text: "Tax reforms",
          correct: true,
        },
        {
          text: "Insurance sector",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which of the given devices is used for counting blood cells?",
      answers: [
        {
          text: "Hmelethometer",
          correct: false,
        },
        {
          text: "Spyscometer",
          correct: false,
        },
        {
          text: "Hemocytometer",
          correct: true,
        },
        {
          text: "Hamosytometer",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of the given compounds is used to make fireproof clothing?",
      answers: [
        {
          text: "Aluminum chloride",
          correct: false,
        },
        {
          text: "Aluminum Sulphate",
          correct: true,
        },
        {
          text: "Magnesium Chloride",
          correct: false,
        },
        {
          text: "Magnesium Sulphate",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which of the given is a disease caused by protozoa?",
      answers: [
        {
          text: "Cancer",
          correct: false,
        },
        {
          text: "Typhoid",
          correct: false,
        },
        {
          text: "Kala-azar",
          correct: true,
        },
        {
          text: "Chicken Pox",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which of the given coins was known as 'Karshapana' in ancient literature?",
      answers: [
        {
          text: "Gold coins",
          correct: false,
        },
        {
          text: "Bronze coins",
          correct: false,
        },
        {
          text: "Punch marked coins",
          correct: true,
        },
        {
          text: "Iron coins",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Rashtriya Swasthya Bima Yojana Launched under Social Security Act 2008 Involves?",
      answers: [
        {
          text: "Only rural workers",
          correct: false,
        },
        {
          text: "Only social workers",
          correct: false,
        },
        {
          text: "Only Unorganized sector workers",
          correct: true,
        },
        {
          text: "All of the above",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
