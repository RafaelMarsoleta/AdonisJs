import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    try {
      const users = await User.all()

      return users
    } catch (err) {
      console.log(err)
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const userData = request.only(['email', 'password'])
      const user = await User.create(userData)

      return response.created(user)
    } catch (err) {
      console.log(err)
    }
  }

  public async show({ params }: HttpContextContract) {
    try {
      const user = await User.query().preload('apiTokens').where('id', params.id).firstOrFail()

      return user
    } catch (err) {
      console.log(err)
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const userData = request.only(['email', 'password'])
      const user = await User.findOrFail(params.id)
      user.merge(userData)
      await user.save()
      return response.ok(user)
    } catch (err) {
      console.log(err)
    }
  }

  public async destroy({}: HttpContextContract) {
    try {
      const users = await User.all()

      return users
    } catch (err) {
      console.log(err)
    }
  }
}
