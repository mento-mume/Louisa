const https = require('https');
const fs = require('fs');

https.get('https://jsonplaceholder.typicode.com/posts',res =>{
    let information = '';
 res.on('data',data =>{
    information +=data;
 })

 res.on('end',()=>fs.writeFile('./result/post.json', information,(err)=>{
    if(err) throw err;
    console.log('file has been written sucessfully')
}))
 })

