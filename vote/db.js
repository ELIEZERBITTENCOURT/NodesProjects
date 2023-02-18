const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/enquetes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
