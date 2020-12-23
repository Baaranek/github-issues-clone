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
    const dep = Issue.findById(req.params.id);
    dep ? res.json(dep) : res.status(500).json({ message: error });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.addIssue = async (req, res) => {
  const { title, author, description, tags, comments, date } = req.body;

  try {
    const newIssue = new Issue({
      title: title,
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
