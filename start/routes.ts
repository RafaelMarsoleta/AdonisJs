import Route from '@ioc:Adonis/Core/Route'

Route.resource('user', 'UsersController').apiOnly()
Route.resource('pessoa', 'PessoasController').apiOnly()
Route.resource('endenreco', 'EnderecosController').apiOnly()
Route.resource('Sexos', 'SexosController').apiOnly()
