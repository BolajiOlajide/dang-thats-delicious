exports.homePage = (req, res) => {
  // res.send('Hey! It works!');
  console.log(req.name);
  res.render('hello', {
    name: 'Bolaji',
    dog: 'Vue',
    title: 'Welcome'
  });
};

exports.addStore = (req, res) => {
  // res.send('it works');
  res.render('editStore', { title: '💩 Add Store' });
};

exports.createStore = (req, res) => {
  res.json(req.body);
};
