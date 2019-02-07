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
    fs.outputFile(filePath, JSON.stringify(getData), 'utf8');
  })
  .catch(function(err) {
    // ...
  })