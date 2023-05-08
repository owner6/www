const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/user/:username', (req, res) => {
	let data = { username: req.params.username, hobbies: ['coding', 'reading', 'swimming'] }
  res.render('user', data);
});

app.post('/check-user',  (req, res) => {
  let username = req.body.username;
  if (username == "") 
    return res.redirect ('about');
  else
    return res.redirect ('/user/' + username);
});
  


const PORT = 3000

app.listen(3000, () => {
  console.log(`Server started on port ${PORT}.`);
});



