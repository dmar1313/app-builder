import React, { useState } from 'react';

function Questions({ onAnswer, onComplete }) {
  const [answer, setAnswer] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    'What is the primary purpose of your app?',
    'Who is the target audience for your app?',
    'What are the core features of your app?',
    // Add more questions as needed
  ];

  const handleSubmit = event => {
    event.preventDefault();
    onAnswer(questions[currentQuestionIndex], answer);
    setAnswer('');

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div>
      <h1>Let's start building your app</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {questions[currentQuestionIndex]}
          <input type="text" value={answer} onChange={event => setAnswer(event.target.value)} />
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Questions;

