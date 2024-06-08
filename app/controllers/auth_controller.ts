import User from '#models/user'
import { registerUserValidator } from '#validators/auth'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
// eslint-disable-next-line unicorn/prefer-node-protocol
import { writeFile } from 'fs/promises'
//import { toPng } from 'jdenticon/standalone'
import pkg from 'jdenticon/standalone'
const { toPng } = pkg

export default class AuthController {
  register({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async handleRegister({ request, session, response }: HttpContext) {
    const { email, password, thumbnail, username } =
      await request.validateUsing(registerUserValidator)

    if (!thumbnail) {
      const png = toPng(username, 100)
      await writeFile(`public/users/${username}.png`, png)
    }
    // eslint-disable-next-line prettier/prettier

    else{
      await thumbnail.move(app.makePath('public/users'), { name: `${cuid()}.${thumbnail.extname}` })
    }

    const filePath = `users/${thumbnail?.fileName || username + '.png'}`
    await User.create({ email, username, thumbnail: filePath, password })
    session.flash('success', 'Inscription Ok !!')
    return response.redirect().toRoute('auth.login')
  }

  login({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }
}
