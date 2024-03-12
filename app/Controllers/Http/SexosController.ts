import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sexo from 'App/Models/Sexo'

export default class SexosController {
  public async index({}: HttpContextContract) {
    try {
      const sexo = await Sexo.all()

      return sexo
    } catch (err) {
      console.log(err)
    }
  }

  public async store({ request }: HttpContextContract) {
    try {
      const sexoData = request.only(['sexo_id'])
      const sexo = await Sexo.create(sexoData)

      return sexo
    } catch (err) {
      console.log(err)
    }
  }

  public async show({ params }: HttpContextContract) {
    try {
      const sexo = await Sexo.findOrFail(params.id)

      return sexo
    } catch (err) {
      console.log(err)
    }
  }

  public async update({ request, params }: HttpContextContract) {
    try {
      const sexoData = request.only(['sexo_id'])
      const sexo = await Sexo.findOrFail(params.id)
      sexo.merge(sexoData)
      await sexo.save()

      return sexo
    } catch (err) {
      console.log(err)
    }
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const sexo = await Sexo.findOrFail(params.id)
      await sexo.delete()
    } catch (err) {
      console.log(err)
    }
  }
}
