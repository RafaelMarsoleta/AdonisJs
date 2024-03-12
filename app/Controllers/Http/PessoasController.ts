import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pessoa from 'App/Models/Pessoa'

export default class PessoasController {
  public async index({}: HttpContextContract) {
    try {
      const pessoas = await Pessoa.all()

      return pessoas
    } catch (err) {
      console.log(err)
    }
  }

  public async store({ request }: HttpContextContract) {
    try {
      const createData = request.only([
        'userId',
        'nome',
        'nascimento',
        'cpfCnpj',
        'sexoId',
        'ativo',
        'email',
      ])
      const pessoas = await Pessoa.create(createData)

      return pessoas
    } catch (err) {
      console.log(err)
    }
  }

  public async show({ params }: HttpContextContract) {
    try {
      const pessoas = await Pessoa.query().where('id', params.id).firstOrFail()

      return pessoas
    } catch (err) {
      console.log(err)
    }
  }

  public async update({ request, params }: HttpContextContract) {
    try {
      const createData = request.only([
        'userId',
        'nome',
        'nascimento',
        'cpfCnpj',
        'sexoId',
        'ativo',
        'email',
      ])
      const pessoas = await Pessoa.findOrFail(params.id)
      pessoas.merge(createData)

      await Pessoa.save()

      return pessoas
    } catch (err) {
      console.log(err)
    }
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const pessoa = await Pessoa.findOrFail(params.id)
      await pessoa.delete()
    } catch (err) {
      console.log(err)
    }
  }
}
