const express = require("express");

const app = express();
app.use(express.json());
// app.get("/message/:id/:user", (req, res) => {
//   const { id, user } = req.params

//   res.send(`ID da mensagem: ${id}. Para o usuário: ${user}`);
// });

app.post("/users", (req, res) => {
  // const { page, limit} = req.query
  const { name, email, password } = req.body;

  res.json({ name, email, password });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
