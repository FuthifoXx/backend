const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(bodyParser.json()); //Parse incoming JSON data
const PORT = 2000; //The part where our server will run

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  //Find user by username
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).json({
      message: 'User not found',
    });
  }
});

//Compare entered password with store hashed password
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
  return res.status(400).json({
    massage: 'Invalid credentials',
  });
} else {
  return res.status(200).json({
    message: 'logged in successful',
    data: user,
  });
}

//Create JWT token
// const token = jwt.sign(
//   {
//     userId: user.id,
//     username: user.username,
//     role: user.role,
//   },
//   'you are logged in as a user'
// );

app.listen(PORT, () => {
  `Serve running on port ${PORT}`;
});
