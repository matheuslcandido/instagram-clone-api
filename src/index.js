const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://dbInstagramClone:iqOvp9cAdHVKebYE@cluster0-fpxxy.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);
