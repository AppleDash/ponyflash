var requests = require('request');
var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();


var DATA_DIR = './data/';

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

        var lines = body.split('\n');

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var match = /Math\.random\(\)\*([0-9]+)/.exec(line);

            if (match) {
                response.send(JSON.stringify({maxflash: parseInt(match[1])}));
                return;
            }
        }
    });
});

app.get('/swf/:swfid', function(request, response) {
    var swfId = parseInt(request.params.swfid);

    if (isNaN(swfId)) {
        response.status(400).send('Invalid SWF ID specified.');
        return;
    }

    var swfFile = swfId + '.swf';

    if (fs.existsSync(path.join(DATA_DIR, swfFile))) {
        response.send(fs.readFileSync(path.join(DATA_DIR, swfFile)));
        return;
    }

    requests.get('http://iwantmoar.com/flash/' + swfId + '.swf', function(hError, hResp, body) {
        if (hError || hResp.statusCode != 200) {
            response.status(500).send('Error from upstream.');
            return;
        }

        fs.writeFile(path.join(DATA_DIR, swfFile), body);

        response.set('Content-Type', 'application/x-shockwave-flash');
        response.send(body);
    });
});

app.listen(3000, function() {
    console.log("PonyFlash server listening on port 3000.");
});
