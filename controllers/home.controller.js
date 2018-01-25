exports.homePage = (req, res) => {
  // res.send('Hey! It works!');
  res.render('hello', {
    name: 'Bolaji',
    dog: 'Vue',
    title: 'Welcome'
  });
};
