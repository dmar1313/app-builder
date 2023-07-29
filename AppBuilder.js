import React, { useState } from 'react';

function AppBuilder() {
  const [code, setCode] = useState(''); // Store the current code
  const [command, setCommand] = useState(''); // Store the current command

  // Handle when the command is submitted
  const handleCommandSubmit = () => {
    // Here we will eventually process the command and update the code
    console.log(command);
  };

  return (
    <div>
      <textarea value={code} disabled /> {/* Display the current code */}
      <textarea value={command} onChange={event => setCommand(event.target.value)} /> {/* Input the command */}
      <button onClick={handleCommandSubmit}>Submit Command</button>
    </div>
  );
}

export default AppBuilder;
