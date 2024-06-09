import type { HttpContext } from '@adonisjs/core/http'
import Form from '#models/form'
import vine from '@vinejs/vine'

export default class FormsController {

  //validator

  validator = vine.compile(
    vine.object({
      title: vine.string().unique(async (db, value) => {
        const form = await db.from(Form.table).where('title', value).first()
        return !form
      }),
      description: vine.string().minLength(2).maxLength(250),

    })
  )

  //create Formulaire

  create({ view }: HttpContext) {
    return view.render('form/home')
  }

  async handle_create({ auth, request, response }: HttpContext) {

    const { title, description } = await this.validator.validate(request.all())
    await Form.create({
      title,
      description,
      owner: auth.user?.id,
    })

    return response.redirect('/form')

  }

//Update formulaire

  async update({ params, view }: HttpContext) {
    let form = await Form.findOrFail(params.id)
    return view.render('form/home', { form })
  }

  async handle_update({ params, request, response }: HttpContext) {
    let form = await Form.findOrFail(params.id)
    const data = await this.validator.validate(request.all())


    form.merge({ ...data }).save()
    return response.redirect('/form')
  }

  //liste Formulaire

  async listForm({ view }: HttpContext) {
    let form = await Form.all()
    return view.render('form/home', { form: form })
  }


  //delete Formulaire

  public async deleteForm({ params, response, session }: HttpContext) {

    const form = await Form.findOrFail(params.id)
    await form.delete()
    session.flash({success:"le formulaire a bien ete suprimer"})
    return response.redirect('/form')
  }
}
