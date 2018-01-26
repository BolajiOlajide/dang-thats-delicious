const express = require('express');
const router = express.Router();

const storeController = require('../controllers/store.controller');

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);


router.get('/reverse/:name', (req, res) => {
  // const { name } = req.params;
  // res.send('it works!');
  const reverse = [...req.params.name].reverse().join('');
  res.json(reverse);
});

module.exports = router;
