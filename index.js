import fetch from 'node-fetch';
// const fetch = require('node-fetch');

fetch('https://catfact.ninja/fact')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
});