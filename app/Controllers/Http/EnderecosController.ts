import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Endereco from 'App/Models/Endereco'

export default class EnderecosController {
  public async index({}: HttpContextContract) {
    try {
      const enderecos = await Endereco.all()

      return enderecos
    } catch (err) {
      console.log(err)
    }
  }

  public async store({ request }: HttpContextContract) {
    try {
      const createData = request.all()
      const enderecos = await Endereco.create(createData)

      return enderecos
    } catch (err) {
      console.log(err)
    }
  }

  public async show({ params }: HttpContextContract) {
    try {
      const enderecos = await Endereco.findOrFail(params.id)
      await enderecos.load('pessoa')

      return enderecos
    } catch (err) {
      console.log(err)
    }
  }

  public async update({ request, params }: HttpContextContract) {
    try {
      const updateDate = request.all()
      const enderecos = await Endereco.findOrFail(params.id)

      enderecos.merge(updateDate)
      await enderecos.save()

      return enderecos
    } catch (err) {
      console.log(err)
    }
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const enderecos = await Endereco.findOrFail(params.id)
      await enderecos.delete()
    } catch (err) {
      console.log(err)
    }
  }
}
