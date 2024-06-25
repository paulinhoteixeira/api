require("express-async-errors")

const AppError = require("./utils/AppError")
const express = require("express");

const routes = require("./routes")

const app = express();
app.use(express.json());
// app.get("/message/:id/:user", (req, res) => {
//   const { id, user } = req.params

//   res.send(`ID da mensagem: ${id}. Para o usuário: ${user}`);
// });

app.use(routes)
app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
