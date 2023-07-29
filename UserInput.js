import React, { useState } from 'react';

function UserInput({ onSubmit }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();

    // Add the user's message to the chat log
    setMessages([...messages, { type: 'user', content: input }]);

    // Call the onSubmit function (which should eventually update the chat log with the AI's response)
    onSubmit(input);

    // Clear the input field
    setInput('');
  };

  return (
    <div>
      <div>
        {/* Display the chat log */}
        {messages.map((message, index) => (
          <div key={index} className={message.type}>
            {message.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
          placeholder="Enter your instructions..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserInput;
