const express = require('express');
const PORT = 1800;
const app = express();

const facultyRouter = require('./routes/faculty')
const deptRouter = require('./routes/department')
const staffRouter = require('./routes/staff')
app.use(express.json());

app.use(facultyRouter)
app.use(deptRouter)
app.use(staffRouter)

app.use('/', (req,res) =>{
    res.send('hello world')
});
app.listen( PORT, ()=>{
    console.log(`app is listening to PORT: ${PORT}`)
})