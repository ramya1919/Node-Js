const http=require('http')
const express=require('express')
const bodyParser=require('body-parser')
const app=express();
let items=[];
app.post('/items',(req,res)=>{
    const newItem={id:items.length+1,...req.body};
    items.push(newItem);
    res.status(201).json(newItem);
});
app.get('/items',(req,res)=>{
    res.status(200).json(items);
});
app.get('/items/:id',(req,res)=>{
    const item=items.find(i=>i.id === parseInt(req.params.id));
    if(!item) return res.status(404).send('item not found');
    res.status(200).json(item)
});
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    Object.assign(item, req.body);
    res.status(200).json(item);
}); 
app.delete('/items/:id',(req,res)=>{
    const itemindex=items.findIndex(i=>i.id === parseInt(req.params.id));
    if(itemindex=== -1) return res.status(404).send('item not found');
    items.splice(itemindex,1);
    res.status(204).send()
});
app.listen(9000,()=>{
    console.log('server started')
})