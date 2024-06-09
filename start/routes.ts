/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/Forms/register');
router.on('/form').render('pages/Forms/registerField');
router.on('/forme').render('pages/Forms/registerField');
