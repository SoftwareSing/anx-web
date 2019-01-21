import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as http from 'http';


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path
app.use('/public', express.static(path.join(__dirname, '../..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'client')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/index.html'));
});

const server = http.createServer(app);
server.listen(80, () => {
  console.log(`server runing`);
});
