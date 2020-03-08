let http = require('http');

let server = http.createServer((req, res) => {

    let categoria = req.url;

    if(categoria == '/tecnologia') {
        res.end("<html><header><meta charset='UTF-8'></header><body>Notícias de tecnologia</body></html>");
    
    } else if(categoria == '/moda') {
        res.end("<html><header><meta charset='UTF-8'></header><body>Notícias de Modas</body></html>");

    } else if (categoria == '/beleza') {
        res.end("<html><header><meta charset='UTF-8'></header><body>Notícias de Beleza</body></html>");
    } else {
        res.end("<html><header><meta charset='UTF-8'></header><body>Portal de noticias</body></html>");
    }
});

server.listen(3000);

// console.log('Criando um site de noticias com NodeJS');
