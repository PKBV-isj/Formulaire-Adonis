/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

<<<<<<< Updated upstream
router.on('/').render('pages/home')
=======
router.on('/').render('pages/home');
>>>>>>> Stashed changes
router.on('/login').render('auth/login')
