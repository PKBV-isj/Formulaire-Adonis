import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'form_fields'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('label').notNullable()
      table.string('type').notNullable()
      table.integer('order').nullable()
      table.string('placeholder').nullable()
      table.boolean('required').notNullable()
      table.string('options').nullable()
      table.integer('formId').unsigned().references('id').inTable('forms').onDelete('CASCADE')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
