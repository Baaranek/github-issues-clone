const mongoose = require('mongoose');

const issueSchema = mongoose.Schema({
  title: {},
  author: {},
  description: {},
  tags: [String],
  comments: [
    {
      description: String,
      author: String,
    },
  ],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Issue', issueSchema);
