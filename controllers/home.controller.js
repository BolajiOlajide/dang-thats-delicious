exports.homePage = (req, res) => {
  // res.send('Hey! It works!');
  console.log(req.name);
  res.render('hello', {
    name: 'Bolaji',
    dog: 'Vue',
    title: 'Welcome'
  });
};

exports.myMiddleware = (req, res, next) => {
  req.name = 'Bolaji';
  next()
}