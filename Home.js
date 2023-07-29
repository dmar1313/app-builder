import React from 'react';

function Home({ onStart }) {
  return (
    <div>
      <h1>Welcome to App Builder</h1>
      <p>This application will guide you through the process of building your own app or website, step by step. Ready to start your project? Click the button below!</p>
      <button onClick={onStart}>Start New Project</button>
    </div>
  );
}

export default Home;
