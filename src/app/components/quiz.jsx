"use client";
import { useState } from 'react';
import '@/app/components/quiz.css'

export default function QuizApp() {
    const [score, setScore] = useState(0);
    const [hasSelected, setHasSeleted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const questions = [
        {
            id: 1,
            question: "Which planet is the largest in our solar system?",
            options: ["Earth", "Jupiter", "Saturn", "Neptune"],
            answer: "Jupiter"
        },
        {
            id: 2,
            question: "What is the capital city of Japan?",
            options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            answer: "Tokyo"
        },
        {
            id: 3,
            question: "Which language is primarily used to style web pages?",
            options: ["JavaScript", "Python", "CSS", "SQL"],
            answer: "CSS"
        },
        {
            id: 4,
            question: "How many sides does a hexagon have?",
            options: ["5", "6", "7", "8"],
            answer: "6"
        },
        {
            id: 5,
            question: "Which gas do plants primarily absorb from the atmosphere during photosynthesis?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            answer: "Carbon dioxide"
        }
    ];
    const totalQuestions = questions.length;


    function optionSelectedCheck(event) {
        if (questions[currentQuestion].answer === event.target.value) {
            setScore(prevScore => prevScore + 1);
            event.target.style.backgroundColor = "green";
        }
        else {
            event.target.style.backgroundColor = "red";
        }
        setHasSeleted(true);
        event.target.style.border = "none";
    };

    return (
        <div className='entire-quiz-wrapper'>
            <div className='quiz-heading'>
                <p className='score-counter'>{currentQuestion < questions.length ? `Score Counter: ${score}/${totalQuestions}` : `Your final score is ${score} out of ${totalQuestions}.`}</p>
                <button
                    className='reset-btn'
                    onClick={() => {
                        setCurrentQuestion(0)
                        setScore(0)
                        hasSelected(false)
                    }}>Reset</button>
            </div>
            {currentQuestion < questions.length && (
                <div className='main-quiz-section'>
                    <p className='question'>{questions[currentQuestion].question}</p>
                    <div className='options-wrapper'>
                        {questions[currentQuestion].options.map(opt => (
                            <button
                                key={opt}
                                value={opt}
                                onClick={(event) => optionSelectedCheck(event)}
                                disabled={hasSelected}
                                className='option-btn'>
                                {opt}
                            </button>
                        ))}
                    </div>

                    <div className='nav-btns'>
                        <button
                        disabled={currentQuestion===0}
                            className='back-btn'
                            onClick={() => {
                                setCurrentQuestion(prev => prev - 1)
                                setHasSeleted(false)
                                setScore(prev => prev - 1)
                            }}>Back</button>

                        <button
                            className='next-btn'
                            disabled={!hasSelected}
                            onClick={() => {
                                setCurrentQuestion(prev => prev + 1)
                                setHasSeleted(false)
                            }}>Next</button>
                    </div>
                </div>
            )
            }
        </div>
    )
}