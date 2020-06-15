const express = require('express');
const next = require('next');

let lopPort = 3020;

const port = parseInt(process.env.PORT, 10) || lopPort;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const fileUpload = require('express-fileupload');

const bodyParser = require('body-parser');

const convertObj = require("object-array-converter");

var ObjectID = require("bson-objectid");

var loki = require('lokijs');
var crypto = require('crypto');

var db = new loki(__dirname + '/db/lop.json');

let locatorScale = 10000000;

function randomValueHex(len) { //  via https://blog.tompawlak.org/generate-random-values-nodejs-javascript
  return crypto.randomBytes(Math.ceil(len / 2))
    .toString('hex') // convert to hexadecimal format
    .slice(0, len);   // return required number of characters
}

function commaParseTags(str) {  //  convert a comma separated string into an array of tags (as strings)
  let retArr = [];
  let tempStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      //  do nothing
    }
    else if (str.charAt(i) === ',') {
      retArr.push(tempStr);
      tempStr = '';
    }
    else {
      tempStr = tempStr + str.charAt(i).toString();
    }
  }
  if (tempStr !== '') {
    retArr.push(tempStr);
  }
  return retArr;
}

var valueHEX = randomValueHex(7)  // value 'ad0fc8c'

function postDataWildcard(
  db,
  table,
  tuple,
  objval,
  objkey = "description",
  newVal = "__"
) {

  console.log(db, tuple, table);
  console.log("collection to update: " + table);
  let dbDirectory = __dirname + "/db/" + db + ".json";
  console.log("loki dir: " + dbDirectory);
  let db2 = new loki(dbDirectory);

  db2.loadDatabase({}, () => {
    let _collection = db2.getCollection(table);

    if (!_collection) {
      console.log(
        "Collection %s does not exist. Aborting attempt to edit ",
        table
      );

      throw new Error("ERROR: collection does not exist");
    } else {
      console.log(table + " collection exists");
    }
    console.log(_collection);

    console.log(objval);
    let objkeyString = objkey.toString();
    let objvalString = objval.toString();

    console.log(`${objkeyString}`);

    let record;

    console.log("tuple: " + tuple);

    record = _collection.findObject({
      locator: { $aeq: tuple },
      [objkeyString]: { $contains: objvalString }
    });

    if (record === null) {
      record = _collection.findObject({ locator: { $aeq: tuple } });
    }

    if (record === null) {
      record = _collection.findObject({
        [objkeyString]: { $contains: objvalString }
      });
    }

    console.log(record);
    console.log(newVal);

    if (
      typeof record[`${objkeyString}`] !== "undefined" &&
      record[`${objkeyString}`] !== null
    ) {
      console.log("0 levels deep in object; key: " + objkeyString);
      console.log(record[`${objkeyString}`]);
      record[`${objkeyString}`] = newVal;
      console.log("set new value");
    } else {
      console.log("going 1 level deep in object");
      console.log(record);

      Object.keys(record).forEach(function (item) {
        console.log(item); // key
        console.log(record[item]); // value

        if (
          typeof record[item][`${objkeyString}`] !== "undefined" &&
          record[item][`${objkeyString}`] !== null
        ) {
          console.log(
            "1 levels deep in object; " + record[item][`${objkeyString}`]
          );
          record[item][`${objkeyString}`] = newVal;
        } else {
          console.log("going 2 levels deep in object");
          console.log(record[item]);

          Object.keys(record[item]).forEach(function (item2) {
            console.log(item2); // key
            console.log(record[item][item2]); // value

            if (
              typeof record[item][item2][`${objkeyString}`] !== "undefined" &&
              record[item][item2][`${objkeyString}`] !== null
            ) {
              console.log(
                "2 levels deep in object;" +
                record[item][item2][`${objkeyString}`]
              );
              record[item][item2][`${objkeyString}`] = newVal;
            } else {
              console.log("going 3 levels deep in object");
              console.log(record[item][item2]);

              Object.keys(record[item][item2]).forEach(function (item3) {
                console.log(item3); // key
                console.log(record[item][item2][item3]); // value

                if (
                  typeof record[item][item2][item3][`${objkeyString}`] !==
                  "undefined" &&
                  record[item][item2][item3][`${objkeyString}`] !== null
                ) {
                  console.log(
                    "3 levels deep in object;" +
                    record[item][item2][item3][`${objkeyString}`]
                  );
                  record[item][item2][item3][`${objkeyString}`] = newVal;
                } else {
                  console.log("object may require greater than 3 depth");
                }
              });
            }
          });
        }
      });
    }
    console.log("about to update collection")
    console.log(record);
    _collection.update(record);

    console.log("about to save database");
    db2.saveDatabase();
  });
}

function deleteDataWildcard(
  db,
  table,
  tuple,
  objval,
  objkey = "description",
  newVal = "__"
) { //  the last 3 parameters can be null
  console.log(db, tuple, table);
  console.log("collection to update: " + table);
  let dbDirectory = __dirname + "/db/" + db + ".json";
  console.log("loki dir: " + dbDirectory);
  let db2 = new loki(dbDirectory);

  db2.loadDatabase({}, () => {
    let _collection = db2.getCollection(table);

    if (!_collection) {
      console.log(
        "Collection %s does not exist. Aborting attempt to edit ",
        table
      );
      throw new Error("ERROR: collection does not exist");
    } else {
      console.log(table + " collection exists");
    }
    console.log(_collection);
    console.log("tuple: " + tuple);

    _collection.findAndRemove({ locator: { $aeq: tuple } });
    db2.saveDatabase();

    console.log("record " + tuple + " removed (💣🤷)");
  });
}

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
    if ((fileEnding === 'pub') || (fileEnding === 'obi')) {  //  probably epub or mobi instead of pdf
      fileEnding = sampleFileName.substr(sampleFileName.length - 4);
    }
    if (fileEnding === 'ub3') {  //  probably epub3
      fileEnding = sampleFileName.substr(sampleFileName.length - 5);
    }

    var actor1 = req.body;

    let LC1 = Date.now().toString() + Math.floor(Math.random() * locatorScale + 1) + valueHEX;

    let LC2 = ObjectID() +  "-" + LC1.toString();

    let fileName = actor1.bookTitle + "-" + actor1.bookYear + "-" + actor1.bookAuthor + "-" + LC2 + "." + fileEnding;

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
    fileNameRefined = fileNameRefined.split('(').join('-');
    fileNameRefined = fileNameRefined.split(')').join('-');
    fileNameRefined = fileNameRefined.split('[').join('');
    fileNameRefined = fileNameRefined.split(']').join('');
    fileNameRefined = fileNameRefined.split('\'').join('');

    actor1.vFile = fileNameRefined;

    actor1.md5 = req.files.sampleFile.md5;

    console.log(actor1);
    console.log(actor1.bookTitle);

    let tags = commaParseTags(actor1.bookTags);

    console.log("tags: ");
    console.log(tags);

    delete actor1.bookTags;

    let serverObject = Object.assign(actor1, { locator: LC2, created_at_time: Date.now(), tags: [tags] })

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

        _collection.insert(serverObject);

        db.saveDatabase();
      });

      res.send('<section>' + 'File uploaded to ' + __dirname + '/public/' + fileNameRefined + ' <a href="http://localhost:' + lopPort + '">Home</a></section><aside><img src="../img/save.gif" id="save" /></aside><style>img#save {width: calc(65vw)}</style>');

    });
  });

  server.get('/listlatest', function (req, res) {
    console.log("running /listlatest");
    let userfiles = 'userfiles';
    let playVideo = req.params.video;

    db.loadDatabase({}, function () {
      let _collection = db.getCollection(userfiles);

      if (!_collection) {
        console.log("Collection %s does not exist. Creating ...", userfiles);
        _collection = db.addCollection(userfiles);
      }
      var results = _collection.find({ 'bookYear': { '$gt': 1923 } });   //  this makes it list all books newer than 1923
      if ((results !== 'undefined') && (results !== null)) {
        res.send(results);
      }
      else {
        res.send({ content: 'none' });
      }
    });
  });

  server.get('/listbooks', function (req, res) {
    console.log("running /listbooks");
    let userfiles = 'userfiles';

    db.loadDatabase({}, function () {
      let _collection = db.getCollection(userfiles);

      if (!_collection) {
        console.log("Collection %s does not exist. Creating ...", userfiles);
        _collection = db.addCollection(userfiles);
      }
      var results = _collection.chain().simplesort("created_at_time", true).limit(20).data();
      console.log(results);
      if ((results !== 'undefined') && (results !== null)) {
        let limtedReturn = results.slice(Math.max(results.length - 25, 0))
        res.send(limtedReturn);
      }
      else {
        res.send({ content: 'none' });
      }
    });
  });

  server.get('/booksearch/:searchString', function (req, res) {
    console.log("running /booksearch/" + req.params.searchString.toString());
    let userfiles = 'userfiles';

    let bookTitle = req.params.searchString;

    db.loadDatabase({}, function () {
      let _collection = db.getCollection(userfiles);

      if (!_collection) {
        console.log("Collection %s does not exist. Creating ...", userfiles);
        _collection = db.addCollection(userfiles);
      }
      console.log("book title: " + bookTitle);
      let results = _collection.chain().find({ bookTitle: {'$contains': bookTitle } } ).simplesort("created_at_time", true).limit(100).data();
      console.log(results);
      if ((results !== 'undefined') && (results !== null)) {
        let limtedReturn = results.slice(Math.max(results.length - 25, 0))
        res.send(limtedReturn);
      }
      else {
        res.send({ content: 'none' });
      }
    });
  });

  server.get('/authorsearch/:searchString', function (req, res) {
    console.log("running /authorsearch/" + req.params.searchString.toString());
    let userfiles = 'userfiles';

    let bookTitle = req.params.searchString;

    db.loadDatabase({}, function () {
      let _collection = db.getCollection(userfiles);

      if (!_collection) {
        console.log("Collection %s does not exist. Creating ...", userfiles);
        _collection = db.addCollection(userfiles);
      }
      console.log("book title: " + bookTitle);
      let results = _collection.chain().find({ bookAuthor : {'$contains': bookTitle } } ).simplesort("created_at_time", true).limit(100).data();
      console.log(results);
      if ((results !== 'undefined') && (results !== null)) {
        let limtedReturn = results.slice(Math.max(results.length - 25, 0))
        res.send(limtedReturn);
      }
      else {
        res.send({ content: 'none' });
      }
    });
  });

  server.get('/md5search/:searchString', function (req, res) {
    console.log("running /md5search/" + req.params.searchString.toString());
    let userfiles = 'userfiles';

    let bookTitle = req.params.searchString;

    db.loadDatabase({}, function () {
      let _collection = db.getCollection(userfiles);

      if (!_collection) {
        console.log("Collection %s does not exist. Creating ...", userfiles);
        _collection = db.addCollection(userfiles);
      }
      console.log("md5 string: " + bookTitle);
      let results = _collection.chain().find({ md5 : {'$contains': bookTitle } } ).simplesort("created_at_time", true).limit(100).data();
      console.log(results);
      if ((results !== 'undefined') && (results !== null)) {
        let limtedReturn = results.slice(Math.max(results.length - 25, 0))
        res.send(limtedReturn);
      }
      else {
        res.send({ content: 'none' });
      }
    });
  });

  var apiDataDB = {};
  server.get("/api/1/getdbdata/db/:db/object/:obj", (req, res) => {
    const AccountsDB = new loki(__dirname + "/db/" + req.params.db + ".json");
    console.log(req.params);
    const theParam = req.params.obj.toString();
    let newData = req.params.newdata;

    AccountsDB.loadDatabase({}, function () {
      let _collection = AccountsDB.getCollection(theParam);

      if (!_collection) {
        console.log("Collection %s does not exist. Creating ... 🎮", theParam);
        _collection = AccountsDB.addCollection(theParam);
      } else {
        console.log("collection exists");
      }

      retData = _collection.find();
      console.log(retData);
      console.log(newData);
      apiDataDB = retData;

      let respObj = Object.assign({}, apiDataDB);
      let respArr = convertObj.toArray(respObj);
      res.send(respArr);
    });
  });

  var apiDataDB1 = {};
  server.get("/api/1/getdbdata/db/:db/object/:obj/tuple/:tuple", (req, res) => {
    const AccountsDB = new loki(__dirname + "/db/" + req.params.db + ".json");
    console.log(req.params);
    const theParam = req.params.obj.toString();
    let newData = req.params.newdata;

    AccountsDB.loadDatabase({}, function () {
      let _collection = AccountsDB.getCollection(theParam);

      if (!_collection) {
        console.log("Collection %s does not exist. Creating ... 🎮", theParam);
        _collection = AccountsDB.addCollection(theParam);
      } else {
        console.log("collection exists");
      }

      let tuple = req.params.tuple;
      retData = _collection.findObject({
        locator: { $aeq: tuple }
      });
      console.log(retData);
      console.log(newData);
      apiDataDB1 = retData;

      let respObj = Object.assign({}, apiDataDB1);
      res.send(respObj);
    });
  });

  server.post(
    "/api/1.6/updatedata/db/:db/object/:obj/objprop/:objprop/objkey/:objkey/newval/:newval/tuple/:tuple",
    (req, res) => {
      console.log("running update POST route (v1.6)");
      console.log("obj: " + req.params.obj);

      var someStr = decodeURIComponent(req.params.objprop);
      let oldVal = someStr.replace(/['"]+/g, '');
      console.log("old value: " + oldVal);

      var someOtherStr = decodeURIComponent(req.params.newval);
      let newVal = someOtherStr.replace(/['"]+/g, '');
      console.log("new value: " + newVal);

      postDataWildcard(
        req.params.db,
        req.params.obj,
        req.params.tuple,
        oldVal,
        req.params.objkey,
        newVal
      );

      res.send(Object.assign({}, { Response: "ok - POST update" }));
    }
  );

  server.post(
    "/api/1/deletedata/db/:db/object/:obj/tuple/:tuple",
    (req, res) => {
      console.log("running (simple) delete POST route");
      console.log("obj: " + req.params.obj);

      deleteDataWildcard(
        req.params.db,
        req.params.obj,
        req.params.tuple,
        null,
        null,
        null
      );  //  the last 3 parameters can be null

      res.send(Object.assign({}, { Response: "ok - POST update (remove)" }));
    }
  );

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
