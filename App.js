import React, { useState } from 'react';
import Home from './Home';
import Questions from './Questions';
import Review from './Review';
import Chat from './Chat';  // Import the Chat component instead of UserInput
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const startProject = () => {
    setCurrentScreen('questions');
  };

  const handleAnswer = (question, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer
    }));
    setCurrentQuestion(currentQuestion + 1);
  };

  const questions = [
    'What is the primary purpose of your app?',
    'Who is the target audience for your app?',
    'What are the core features of your app?',
    // Add more questions as needed
  ];

  const handleUserSubmit = (input) => {
    fetch('http://localhost:3001/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: input }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.aiOutput);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  if (currentScreen === 'home') {
    return (
      <div className="App">
        <Home onStart={startProject} />
        <Chat onSubmit={handleUserSubmit} />  
      </div>
    );
  } else if (currentScreen === 'questions') {
    return (
      <div className="App">
        <Questions onAnswer={handleAnswer} onComplete={() => setCurrentScreen('review')} question={questions[currentQuestion]} />
      </div>
    );
  } else if (currentScreen === 'review') {
    return (
      <div className="App">
       <Review 
          answers={answers} 
          onUpdate={(question, newAnswer) => {
            setAnswers(prevAnswers => ({
              ...prevAnswers,
              [question]: newAnswer
            }));
          }} 
         onGenerate={() => handleUserSubmit('Generate the code for the new app')}

        />
      </div>
    );
  }
}

export default App;
