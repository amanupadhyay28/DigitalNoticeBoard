import React, { useState, useRef } from 'react';
import axios from 'axios';

function MessageList({ messages }) {
  return (
    <div className="overflow-y-auto h-80 p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-2`}
        >
          <div
            className={`rounded-lg p-3 max-w-xs ${
              message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}

// MessageInput component for entering new messages
function MessageInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-t p-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow p-2 border border-gray-300 rounded-lg mr-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  );
}

// Main ChatBox component
function ChatBox() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', isUser: false },
  ]);
  const lastRequestTime = useRef(Date.now());

  const handleSend = async (message) => {
    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
    ]);

    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime.current;
    const minInterval = 1000; // 1 second

    if (timeSinceLastRequest < minInterval) {
      console.warn(`Throttling requests. Waiting for ${minInterval - timeSinceLastRequest}ms`);
      await new Promise((resolve) => setTimeout(resolve, minInterval - timeSinceLastRequest));
    }

    lastRequestTime.current = Date.now();

    let retryCount = 0;
    const maxRetries = 5;
    const baseDelay = 1000; // 1 second

    while (retryCount <= maxRetries) {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access
            messages: [
              { role: 'system', content: 'You are a helpful assistant.' },
              ...messages.map((msg) => ({
                role: msg.isUser ? 'user' : 'assistant',
                content: msg.text,
              })),
              { role: 'user', content: message },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
          }
        );

        const reply = response.data.choices[0].message.content;

        // Add the assistant's reply to the chat
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: reply, isUser: false },
        ]);
        break; // Break out of the loop if successful
      } catch (error) {
        if (error.response && error.response.status === 429) {
          // Handle rate limit error
          retryCount++;
          const delay = baseDelay * Math.pow(2, retryCount);
          console.warn(`Rate limit hit. Retrying in ${delay / 1000} seconds...`);
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          // Handle other errors
          console.error('Error communicating with the ChatGPT API:', error);
          break;
        }
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-lg shadow-md">
      <div className="flex flex-col h-96">
        <MessageList messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}

export default ChatBox;
