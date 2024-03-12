import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Pessoa from './Pessoa'

export default class Endereco extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public logradouro: string

  @column()
  public numero: number

  @column()
  public bairro: string

  @column()
  public cep: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Pessoa)
  public pessoa: BelongsTo<typeof Pessoa> //Endereço pertence a Pessoa
}
