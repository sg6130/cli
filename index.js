// const express = require('express');
// const app = express();

// const port = 3000;

// app.listen(port,()=>{
    
//     console.log('Running on port',port);

// })

// app.get('/hello',(req,res)=>{
//         console.log("hey you what are youlooking at");

//#!/usr/bin/env node

const program = require('commander');
const list = require('./cli-app/list');
list();

program
    .command('list')
    .alias('ls')
    .description('Menu')
    .action(function(){
        list();
    });

program.parse(process.argv);

