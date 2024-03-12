import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pessoas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('nome').notNullable()
      table.date('nascimento').notNullable()
      table.string('cpfOrcnpj').notNullable()
      //table.image?('image')
      table
        .integer('sexo')
        .unsigned() // unsigned: Nao poder ter numero negativo
        .references('id')
        .inTable('sexos')
        .onDelete('CASCADE') //se for deletado, tudo é deletado
      table.boolean('ativo').defaultTo(true)
      table.string('email').notNullable().unique()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
