const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.User = require('./api/models/user');
global.Member = require('./api/models/member');
global.Package = require('./api/models/package');
global.Timetable = require('./api/models/timetable');
global.Yoga = require('./api/models/yoga');
const routes = require('./api/routes/Routes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify',false);
mongoose.connect(`mongodb+srv://Yoga:${ process.env.MONGOPW }@cluster0-gemdg.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req,res) => {
  res.status(404).send({ url: `${req.originalUrl} not found`})
});

console.log(`Server started on port ${ port }`);
