const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: 'Bajlar', email: 'bajlar@gmail.com'},
  { id: 2, name: 'Sejan', email: 'sejan@gmail.com'},
  { id: 3, name: 'Rabbi', email: 'rabbi@gmail.com'}
]

const learning = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'SASS', 'JavaScript', 'Problem solving', 'API', 'React', 'React Router']

app.get('/', (req, res) => {
  res.send('Users Management server is running');
})

app.get('/users', (req, res) => {
  res.send(users);
})

app.post('/users', (req, res) => {
  console.log('post api hitting');
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
})

app.get('/learning', (req, res) => {
  res.send(learning);
})

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
})