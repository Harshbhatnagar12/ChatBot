import { useState, useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! I am your AI Assistant. Ask me anything.",
    },
  ]);

  const [input, setInput] = useState("");

  useEffect(() => {
    const socketInstance = io("http://localhost:3000");

    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      console.log("✅ Connected:", socketInstance.id);
    });

    socketInstance.on("disconnect", () => {
      console.log("❌ Disconnected");
    });

    socketInstance.on("ai-message-response", (response) => {
      const botMessage = {
        id: Date.now(),
        sender: "bot",
        text: response,
      };

      setMessages((prev) => [...prev, botMessage]);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);

    if (socket) {
      socket.emit("ai-message", {
        prompt: trimmedInput,
      });
    }

    setInput("");
  };

  return (
    <div className="app-shell">
      <div className="chat-card">
        <header className="chat-header">
          <h1>AI ChatBot</h1>
        </header>

        <main className="messages-panel">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-bubble ${message.sender}`}
            >
              <strong>
                {message.sender === "user" ? "You" : "AI"}
              </strong>
              <br />
              {message.text}
            </div>
          ))}
        </main>

        <form className="composer" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;