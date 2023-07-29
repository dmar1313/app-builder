import React from 'react';

function Review({ answers, onUpdate, onGenerate }) {
  const handleUpdate = (question, newAnswer) => {
    onUpdate(question, newAnswer);
  };

  return (
    <div>
      <h1>Review Your Answers</h1>
      {Object.entries(answers).map(([question, answer], index) => (
        <div key={index}>
          <h3>{question}</h3>
          <input 
            type="text" 
            value={answer} 
            onChange={event => handleUpdate(question, event.target.value)} 
          />
        </div>
      ))}
      <button onClick={onGenerate}>Generate App</button>
    </div>
  );
}

export default Review;
