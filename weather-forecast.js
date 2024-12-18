const http = require('https');

const options = {
	method: 'GET',
	hostname: 'open-weather13.p.rapidapi.com',
	port: null,
	path: '/city/fivedaysforcast/30.438/-89.1028',
	headers: {
		'x-rapidapi-key': '9055396c6bmsh40bb01489964ae8p19ef9ajsnbc77a619d9c6',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
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