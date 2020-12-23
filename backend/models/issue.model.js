const mongoose = require('mongoose');

const issueSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
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
