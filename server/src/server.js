const app= require('./app');
//starting a server on a port.It's better to get from ENV file.Please replace it
app.listen(4000,()=>{
    console.log('Start to listening on port 4000');
});