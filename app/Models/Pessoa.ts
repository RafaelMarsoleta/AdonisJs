import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Endereco from './Endereco'
import User from './User'
import Sexo from './Sexo'

export default class Pessoa extends BaseModel {
  public static save() {
    throw new Error('Method not implemented.')
  }
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public nome: string

  @column()
  public nascimento: DateTime

  @column()
  public cpfOrcnpj: string

  @column()
  public sexoId: number

  @column()
  public ativo: boolean

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Sexo)
  public sexo: BelongsTo<typeof Sexo>

  @hasMany(() => Endereco)
  public endereco: HasMany<typeof Endereco> //Endereço filho de Pessoa
}
