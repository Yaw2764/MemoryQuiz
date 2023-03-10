import React, { useState, useEffect, Component } from 'react';
 

function Appp() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const countdown = 5;
	const [showScore, setShowScore] = useState(false);
	const [counter, setCounter] = useState(countdown);
	const [page, setPage] = useState('menu')


	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect && counter >0){
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setCounter(countdown);

		} else {
			setPage("Score");
		}
	};

	const handleResetClick = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowScore(false);
		clearInterval(counter);
		setPage("Menu");
		
	};

	const handleStartFromMenu = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowScore(false);
		clearInterval(counter);
		setPage("Question");
		
	};

	

    useEffect(()=>{
        if (counter >0){
            setTimeout(()=> setCounter(counter - 1), 1000); 
        }


    },[counter])


	return (
		<div className='app'>

{(() => {
        switch (page) {
          case 'Question':
            return <div><div className='question-section'>
			<div className='question-count'>
				<span>Question {currentQuestion + 1}</span>/{questions.length}
				
				{counter}
			</div>
			<div className='question-text'>{questions[currentQuestion].questionText}</div>
		</div>
		<div className='answer-section'>
			{questions[currentQuestion].answerOptions.map((answerOption,index) =>
			(<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
		</div></div>

          case 'Score':
            return <div><div className='score-section'>You scored {score} out of {questions.length}
			<button onClick={() => handleResetClick()}>Reset</button>
			
			</div></div>
         
          default:
            return <div className='score-section'>This is the Menu
			<button onClick={() => handleStartFromMenu()}>Start</button>
			</div>
        }
      })()}
			



			{/* {showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
				<button onClick={() => handleResetClick()}>Reset</button>
				
				</div>
				

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
							
							{counter}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption,index) =>
						(<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
					</div>
				</>
			)} */}
		</div>
	);
}


function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const countdown = 5;
	const [showScore, setShowScore] = useState(false);
	const [counter, setCounter] = useState(countdown);

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect && counter >0){
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setCounter(countdown);

		} else {
			setShowScore(true);
		}
	};

	const handleResetClick = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowScore(false);
		clearInterval(counter);
		
	};

	

    useEffect(()=>{
        if (counter >0){
            setTimeout(()=> setCounter(counter - 1), 1000); 
        }


    },[counter])

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
				<button onClick={() => handleResetClick()}>Reset</button>
				
				</div>
				

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
							
							{counter}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption,index) =>
						(<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
					</div>
				</>
			)}
		</div>
	);
}
export default Appp;
