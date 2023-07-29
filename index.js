const express = require('express');
const openai = require('openai');

openai.apiKey = 'urrent api openai: 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';  // Replace with your actual OpenAI API key

const app = express();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(express.json());  // This is middleware that helps handle JSON request bodies

app.post('/api/generate', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await openai.Completion.create({
      engine: 'davinci-codex',
      prompt: prompt,
      max_tokens: 100,
    });

    const aiOutput = response.choices[0].text.trim();
    res.json({ aiOutput });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error generating output' });
  }
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));