require('dotenv').config();
const app = require('./src/app');
const {createServer} = require('http');
const {Server} = require('socket.io');
const generateResponse = require('./src/service/ai.service');

// socket = single user 
// io = Pura Server  

const httpServer = createServer(app);
const io = new Server(httpServer, {  });

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

 socket.on('ai-message', async (data) => {
    console.log("Received AI message: ", data.prompt);
    const response = await generateResponse(data.prompt);
    console.log('AI Response:', response);
 })

})

httpServer.listen(3000,()=>{
    console.log('Server is running on port 3000');
});