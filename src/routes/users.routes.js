const { Router } = require('express')

const usersRoutes = Router()

usersRoutes.post("/", (req, res) => {
  // const { page, limit} = req.query
  const { name, email, password } = req.body;

  res.json({ name, email, password });
});

module.exports = usersRoutes;