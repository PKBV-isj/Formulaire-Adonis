import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import FormField from './form_field.js'
import { type BelongsTo, type HasMany } from '@adonisjs/lucid/types/relations'

export default class Form extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string | null

  @column({ columnName: 'owner' })
  declare owner: number

  @belongsTo(() => User, {localKey: 'owner'})
  user!: BelongsTo<typeof User>

  @hasMany(() => FormField)
  declare formFields: HasMany<typeof FormField>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
