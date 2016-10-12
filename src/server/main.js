var requests = require('request');
var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello, world!');
});

app.get('/swf', function(request, response) {
    requests.get('http://iwantmoar.com/1', function(hError, hResp, body) {
        response.set('Content-Type', 'application/json');

        if (hError || hResp.statusCode != 200) {
            response.status(500).send(JSON.stringify({error: 'Could not fetch page from upstream.'}));
            return;
        }


    });
});

app.get('/swf/:swfid', function(request, response) {
    var swfId = parseInt(request.params.swfid);

    if (isNaN(swfId)) {
        response.status(400).send('Invalid SWF ID specified.');
        return;
    }

    requests.get('http://iwantmoar.com/flash/' + swfId + '.swf', function(hError, hResp, body) {
        if (hError || hResp.statusCode != 200) {
            response.status(500).send('Error from upstream.');
            return;
        }

        response.set('Content-Type', 'application/x-shockwave-flash');
        response.send(body);
    });
});

app.listen(3000, function() {
    console.log("Server listening.");
});
