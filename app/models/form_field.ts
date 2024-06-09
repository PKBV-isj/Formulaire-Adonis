import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Form from  './form.js'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'

export default class FormField extends BaseModel {
  @column({ isPrimary: true })
  declare id: number


  @column()
  declare label: string

  @column()
  declare type: string

  @column()
  declare order: number | null

  @column()
  declare placeholder: string | null

  @column()
  declare required: boolean 

  @column()
  declare options: string | null

  @column({ columnName: 'formId' })
  declare formId: number

  @belongsTo(() => Form, {localKey: 'formId'})
  form!: BelongsTo<typeof Form>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
