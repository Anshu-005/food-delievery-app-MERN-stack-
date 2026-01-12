require('dotenv').config();
const express =  require('express')
const app = express();
const connectDB = require('./db')
console.log(process.env)

connectDB();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000") //to handle CORS issues(cross origin resourse sharing)
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})




app.use(express.json());

app.use('/api',require('./routes/CreateUser'));
app.use('/api',require('./routes/DisplayData'));
app.use('/api',require('./routes/OrderData'));
















const PORT = 5000;
app.listen(PORT, ()=>{
    console.log('Listening at 5000');
    
})