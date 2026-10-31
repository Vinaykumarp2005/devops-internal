const express=require('express');
const app=express();
app.use(express.json());
let students=[{id:1,name:"Ram",age:21,dept:"CSE"},{id:2,name:"kumar",age:22,dept:"CSE"}];
app.get('/students',(req,res)=>{
   return res.json(students);
});

app.post('/students',(req,res)=>{
    const student={id:students.length+1,...req.body};
    students.push(student);
    return res.json(student)
});

app.put('/students/:id',(req,res)=>{
    const id=Number(req.params.id);
    const index=students.findIndex(s=>s.id===id);
    if(index==-1){
        return res.json({message:"Student not found"});
    }
    students[index]=req.body;
    return res.json(students[index]);
});
app.delete('/students/:id',(req,res)=>{
    const id=Number(req.params.id);
    const index=students.findIndex(s=>s.id===id);
    if(index==-1){
        return res.status(404).json({message:"Student not found"});
    }
    students.splice(index,1);
    return res.json(students);
}
);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
