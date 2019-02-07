const fs = require('fs-extra');
const needle = require('needle');
const url = 'https://swapi.co/api/people/1/';
const filePath = '/media/sergii/SP UFD U2/2/Lesson2.txt';
let getData = null;

needle('get', url)
  .then(function(response) {
    getData = response.body;
    return (getData);
  })
  .then(function() {
    console.log('d');
    console.log(getData);
    fs.writeFile(filePath, JSON.stringify(getData), 'utf8');
  })
  .catch(function(err) {
    // ...
  })




/*
needle.get(url, function(error, response) {
  if (!error && response.statusCode == 200)
    console.log(response.body);
});
*/



/*

swapi

needle - берем библиотеку 
fs-external

с интернета запрашиваем информацию и записіваем в файл
*/


/*

const promTimer = (timeout) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(resolve,timeout);
    });
};

promTimer(2000)
.then(()=>{
    console.log('stage1');
});
new Promise ((resolve) => {
    resolve();
}).then(()=>{
    return promTimer(2000).then(()=>{console.log('age')})
}).then(()=>{
    console.log('finish');
})
*/


/*
const promTimer = (timeout) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(resolve,timeout);
    });
};

promTimer(2000)
.then(()=>{
    console.log('stage1');
});
new Promise ((resolve) => {
    resolve();
}).then(()=>{
    return promTimer(2000).then(()=>{console.log('age')})
}).then(()=>{
    console.log('finish');
})
*/


/*
const promTimer = (timeout) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(resolve,timeout);
    });
};

promTimer(2000)
.then(()=>{
    console.log('stage1');
});
*/


/*
промис которій запустит then когда наступит вермя

const promTimer = (timeout) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(resolve,timeout)
    })
}
*/


/*
const fs = require("fs-extra");
const filePath = '/media/sergii/SP UFD U2/1/Lesson.txt';
const copyfilePath = '/media/sergii/SP UFD U2/2/Lesson2.txt';
fs.copy(filePath, copyfilePath);

*/



/*
const fs = require("fs-extra");
const filePath = '/media/sergii/SP UFD U2/1/Lesson.txt';
const copyfilePath = '/media/sergii/SP UFD U2/2/Lesson2.txt';
fs.copy(filePath, copyfilePath);

---
const prom = new Promise (...)
.then (()=>{
    return fs.copy(....)
}).then (()=>)

*/

/*console.log('start');

//const promise = new Promise(function(resolve, reject) {
const promise = new Promise((resolve, reject) => { 
    console.log('stage1');
    setTimeout(() => {
        resolve();
        console.log('abc'),1000
    });
  })

console.log('end');

promise.then(()=>{
    console.log('stage2');
});

console.log(typeof(promise));
*/
/*
prom.then(() => {
return new Promise ((...))
})
*/


/*
console.log('start');

//const promise = new Promise(function(resolve, reject) {
const promise = new Promise((resolve, reject) => { 
    console.log('stage1');
    setTimeout(() => {
        resolve();
        console.log('abc'),1000
    });
  })

console.log('end');

promise.then(()=>{
    console.log('stage2');
});
*/

//промисі
/*проблема - калбеки если их многоони друг в друга вкладіваются
cb = {
    cb = {
        ...
    }
} 
promisi
cb = {}
cb = {}
cb = {}

async / aveit




*/

/*const add = (a, b) => a+b;

console.log('Add numbers: 5 + 2 = ' + add(5, 2));
console.log('Concatenate: \'5\' + \'2\' = ' +add('5', '2'));
console.log('Substration: 5 + (-2) = ' + add(5, -2));
*/

/*const MAX_VALUE = 10;

console.log('Begin');
for (let i=0; i < MAX_VALUE; i++) {
    console.dir({ i, date: new Date() });
};
console.log('The end')

*/

/*

const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

const event = () => {
    if (counter === MAX_VALUE) {
        console.log ('The end');
        clearInterval(timer);
        return;
    }
    console.dir({ counter, date:new Date() });
    counter++;
};

console.log('Begin');
timer = setInterval(event, INTERVAL);

*/