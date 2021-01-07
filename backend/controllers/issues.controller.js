const Issue = require('../models/issue.model');

exports.getAllIssues = async (req, res) => {
  try {
    res.json(await Issue.find());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getIssueById = async (req, res) => {
  try {
    const dep = await Issue.findById(req.params.id);
    dep ? res.json(dep) : res.status(500).json({ message: error });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.addIssue = async (req, res) => {
  const { title, author, description, tags, comments, date } = req.body;

  try {
    const newIssue = new Issue({
      title,
      author,
      description,
      tags,
      comments,
      date,
    });
    await newIssue.save();
    res.json({ message: 'OK' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.addCommentToIssue = async (req, res) => {
  const { description, author } = req.body;
  const currentCommentBody = { author: author, description: description };

  try {
    await Issue.findByIdAndUpdate(
      { _id: req.params.id },
      { $addToSet: { comments: currentCommentBody } },
      function (error, success) {
        if (error) {
          res.status(500).json({ message: error });
        } else {
          res.status(200).json({ message: 'Ok' });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
