import express from 'express';

const app=express();

let jobs={};

app.post('/submit',(req,res)=>{
    const jobId=`${Date.now()}`;
    jobs[jobId]=0;
    update(jobId,0);
    res.end(`\n${jobId}\n`);
});

app.get('/status/:jobId',(req,res)=>{
    const jobID=`${req.params.jobId}`;
    
    res.send(`\nJob Status ${jobs[jobID]}%\n`)
})

app.listen(3001,()=>{
    console.log('Listening on port 3001');
});

function update(jobId,progress){
    jobs[jobId]=progress;
    if(progress===100){
        return;
    }
    setTimeout(()=>{update(jobId,progress+10)},3000)
}