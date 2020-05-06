const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const fileUpload = require('express-fileupload')

const bodyParser = require('body-parser');

var loki = require('lokijs')
var crypto = require('crypto');

var db = new loki(__dirname + '/db/lop.json')

function randomValueHex (len) { //  via https://blog.tompawlak.org/generate-random-values-nodejs-javascript
  return crypto.randomBytes(Math.ceil(len/2))
      .toString('hex') // convert to hexadecimal format
      .slice(0,len);   // return required number of characters
}

var valueHEX = randomValueHex(7)  // value 'ad0fc8c'

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))
  // server.use(bodyParser.json())

  server.use(fileUpload());

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.post('/upload', function (req, res) {
    console.log(req.body);
    
    if (!req.files)
      return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
    console.log(req.files);
    let sampleFile = req.files.sampleFile;

    let sampleFileName = req.files.sampleFile.name;
    let fileEnding = sampleFileName.substr(sampleFileName.length - 3);
    if (fileEnding === 'pub') {  //  probably epub instead of pdf
      fileEnding = sampleFileName.substr(sampleFileName.length - 4);
    }

    var actor1 = req.body;

    let fileName = actor1.bookTitle + "-" + actor1.bookYear + "-" + actor1.bookAuthor + "-" + valueHEX + "." + fileEnding;

    var fileNameRefined = fileName.split(' ').join('');
    fileNameRefined = fileNameRefined.split(',').join('');
    fileNameRefined = fileNameRefined.split('*').join('');
    fileNameRefined = fileNameRefined.split('#').join('');
    fileNameRefined = fileNameRefined.split('~').join('');
    fileNameRefined = fileNameRefined.split('_').join('-');
    fileNameRefined = fileNameRefined.split('@').join('');
    fileNameRefined = fileNameRefined.split('%').join('');
    fileNameRefined = fileNameRefined.split('^').join('');
    fileNameRefined = fileNameRefined.split('&').join('');
    fileNameRefined = fileNameRefined.split(';').join('-');
    fileNameRefined = fileNameRefined.split(':').join('-');
    fileNameRefined = fileNameRefined.split('{').join('');
    fileNameRefined = fileNameRefined.split('}').join('');

    actor1.vFile = fileNameRefined;

    console.log(actor1);
    console.log(actor1.bookTitle);

    // Use the mv() method to upload the file to the '/public' directory
    sampleFile.mv(__dirname + '/public/uploads/' + fileNameRefined, function (err) {
      if (err)
        return res.status(500).send(err);

      let userfiles = 'userfiles';

      db.loadDatabase({}, function () {
        let _collection = db.getCollection(userfiles);

        if (!_collection) {
          console.log("Collection %s does not exit. Creating ...", userfiles);
          _collection = db.addCollection(userfiles);
        }

        _collection.insert(actor1);

        db.saveDatabase();
      });

      res.send('File uploaded to ' + __dirname + '/public/' + fileNameRefined + ' <a href="http://localhost:3000">Home</a>');

    });
  });

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
