const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  res.render('hello', {
    name: 'Bolaji',
    dog: 'Vue',
    title: 'Welcome'
  });
});


router.get('/reverse/:name', (req, res) => {
  // const { name } = req.params;
  // res.send('it works!');
  const reverse = [...req.params.name].reverse().join('');
  res.json(reverse);
});

module.exports = router;
