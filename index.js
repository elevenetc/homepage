const restify = require('restify');
const fs = require('fs');

const server = restify.createServer({
    key: fs.readFileSync('./ssl/server.key'),
    certificate: fs.readFileSync('./ssl/server.crt'),
    requestCert: true,
    name: 'elevenetc.su',
    version: '0.0.1',
    log: {
        trace: function (name, err) {
            if (name) {
                console.log(name);
            } else if (err) {
                console.log(err);
            }
        }
    }
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/', restify.serveStatic({
    directory: __dirname,
    default: 'index.html'
}));

server.get('js/out.js', restify.serveStatic({
    directory: __dirname,
}));

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});

