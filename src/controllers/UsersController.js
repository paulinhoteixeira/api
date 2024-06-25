const AppError = require('../utils/AppError')

class UsersController{
  create(request, response){
     // const { page, limit} = request.query
  const { name, email, password } = request.body;

  if(!name){
    throw new AppError("Nome é obrigatório!")
  }

  response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController