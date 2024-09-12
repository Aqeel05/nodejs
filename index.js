//console.log('Hello World');

//console.log(global.luckyNum);

//global.luckyNum = '23';
//console.log(global.luckyNum);

//console.log(process.platform);

//console.log(process.env.USER);

/*process.on('exit', function(){

})

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {

    console.log('yum');
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');
*/

/*
blocking
const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');

console.log(txt);

console.log('do this ASAP')
*/

/*
non blocking
const { readFile, readFileSync } = require('fs');


readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
});

console.log('do this ASAP')
*/

/*
promised based
const { readFile } = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
    console.log(file);
}
hello();

console.log('hello');
hello();
*/

//const myModule = require('./my-module');

//console.log(myModule)

const { readFile } = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf8') );
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
