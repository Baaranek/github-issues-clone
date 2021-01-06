const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// import Routes
const issuesRoutes = require('./routes/issues.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Add routes as middleware
app.use('/api', issuesRoutes);

// Mongoose
mongoose.connect(
  'mongodb+srv://admin:admin@issues.jzwv2.mongodb.net/github?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error ' + err));

//app listen in order to start server
const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});
