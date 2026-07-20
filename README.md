# 🤖 AI ChatBot

A real-time AI ChatBot built using **React.js**, **Node.js**, **Express.js**, **Socket.IO**, and **Google Gemini AI**. The application enables users to interact with an AI assistant in real time while maintaining conversation context for more natural responses.

---

## 🚀 Features

- 💬 Real-time messaging with Socket.IO
- 🤖 AI-powered responses using Google Gemini AI
- 🧠 Short-term conversation memory
- ⚡ Fast bidirectional client-server communication
- 🎨 Clean and responsive user interface
- 🔐 Secure API key management using environment variables

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS
- Socket.IO Client

### Backend
- Node.js
- Express.js
- Socket.IO
- Google Gemini AI SDK
- dotenv

## 📂 Project Structure

```
AI-ChatBot
│── client
│   ├── src
│   ├── public
│   └── package.json
│
│── server
│   ├── src
│   │   ├── app.js
│   │   ├── service
│   │   │   └── ai.service.js
│   │   └── routes
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AI-ChatBot.git
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install
```

### 4. Create Environment Variable

Create a `.env` file inside the **server** folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

### 5. Start the Backend

```bash
npm run dev
```

### 6. Start the Frontend

```bash
npm run dev
```

## 📖 How It Works

1. User enters a message in the React application.
2. The message is sent to the server using Socket.IO.
3. The server forwards the conversation to Google Gemini AI.
4. Gemini generates a response.
5. The response is sent back to the client instantly.
6. Both user and AI messages are stored in chat history to maintain conversation context.

## 🎯 Learning Outcomes

- React Hooks
- Socket.IO
- Real-Time Communication
- Express.js
- Node.js
- Google Gemini AI Integration
- Event-Driven Programming
- WebSocket Communication

## Screnshot 

<img width="1920" height="1080" alt="Screenshot (94)" src="https://github.com/user-attachments/assets/0fd02faf-8965-4f26-a203-3452a3e158bc" />
<img width="1920" height="1080" alt="Screenshot (95)" src="https://github.com/user-attachments/assets/9711c333-13c8-486a-b3e2-3f6437a8fef2" />



