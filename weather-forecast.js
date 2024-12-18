require('dotenv').config();
const http = require('https');

const options = {
	method: 'GET',
	hostname: 'open-weather13.p.rapidapi.com',
	port: null,
	path: '/city/fivedaysforcast/30.438/-89.1028',
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
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();