require('dotenv').config();
const http = require('https');

const options = {
    method: 'GET',
    hostname: process.env.RAPIDAPI_HOST,
    port: null,
    path: '/city/London/EN',
    headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.RAPIDAPI_HOST
    }
};

const req = http.request(options, function (res) {
    const chunks = [];

    res.on('data', function (chunk) {
        chunks.push(chunk);
    });

    res.on('end', function () {
        const body = Buffer.concat(chunks).toString();
        console.log('Response:', body);
    });
});

req.end();