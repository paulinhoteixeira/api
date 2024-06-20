class UsersController{
  create(request, response){
     // const { page, limit} = request.query
  const { name, email, password } = request.body;

  response.json({ name, email, password });
  }
}

module.exports = UsersController