/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'



router.on('/').render('pages/home');
router.on('/login').render('auth/login');
router.on('/logo').render('statistic/index')
