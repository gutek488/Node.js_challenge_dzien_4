const http = require('http');

const srv = http.createServer((req, res) => {
    const userAgent = req.headers['user-agent'];
    res.setHeader("Content-Type", "text/html");
    res.end(`${userAgent}`);

});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});