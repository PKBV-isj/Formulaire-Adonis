/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import FormsController from '#controllers/forms_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router
.group(() => {
router.get('create', [FormsController,'create' ]).as('createForm')
router.post('handle_create', [FormsController,'handle_create' ]).as('handle_createForm')

router.put('update/', [FormsController, 'update']).as('updateForm')
router.post('handle_update/:id', [FormsController, 'handle_update']).as('handle_updateForm')

router.post('delete/:id', [FormsController, 'deleteForm']).as('deleteForm')

router.get('form', [FormsController, 'listForm']).as('listForm')
})
