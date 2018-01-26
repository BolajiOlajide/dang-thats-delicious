const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller');

// Do work here
router.get('/', homeController.myMiddleware, homeController.homePage);


router.get('/reverse/:name', (req, res) => {
  // const { name } = req.params;
  // res.send('it works!');
  const reverse = [...req.params.name].reverse().join('');
  res.json(reverse);
});

module.exports = router;
