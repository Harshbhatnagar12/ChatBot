require('dotenv').config();
const app = require('./src/app');
const {createServer} = require('http');
const {Server} = require('socket.io');
const generateResponse = require('./src/service/ai.service');

// socket = single user 
// io = Pura Server  
//on = event listner
//emit = event fire karna 

// when event fire client side then server listen same viceversa

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
       
    }
  });

const chatHistory = [
   
]

// jab server sa yah connection kiya 
// jayga tab yah event fire hoaga and callback chal jayga, So connection event ka based pa hoata hai  
io.on('connection', (socket) => {
 console.log('A user connected');

 socket.on('disconnect', () => {
 console.log('A user disconnected');
 })

 socket.on('mama', (data) => {
    console.log(data);
 })

// AI-Message
socket.on('ai-message', async (data) => {  // it will listen on the server side when client side fire the event
    console.log('AI- Message received:', data.prompt);

    chatHistory.push({
        role: "user",
        parts: [{ text: data.prompt }]
    })

    const response = await generateResponse(chatHistory); // it will show the respone on the client side 
     console.log('AI Response:', response); 

       chatHistory.push({
            role: "model",
            parts: [
                {
                    text: response
                }
            ]
        });


     socket.emit("ai-message-response", response); // fire emit on server then data transfer to the client 
})


})

httpServer.listen(3000,()=>{
    console.log('Server is running on port 3000');
});