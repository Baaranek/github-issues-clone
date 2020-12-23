const express = require('express');
const router = express.Router();
const IssuesController = require('../controllers/issues.controller');

router.get('/issues', IssuesController.getAllIssues);
router.get('/issues/:id', IssuesController.getIssueById);
router.post('/issues', IssuesController.addIssue);

module.exports = router;
