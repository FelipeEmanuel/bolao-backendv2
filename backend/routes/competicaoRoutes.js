const express = require('express')
const router = express.Router()
const {getCompeticao, setCompeticoes, updateCompeticao, deleteCompeticao, getCompeticaoById, encerrarCompeticao, getCompeticoesAtivas} = require('../controllers/competicaoController')
const { protect, isAdmin } = require('../middleware/authMiddleware')

router.route('/').get(protect, getCompeticao).post(protect, isAdmin, setCompeticoes)
router.route('/comps/:id').delete(protect, isAdmin, deleteCompeticao).put(protect, isAdmin, updateCompeticao).get(protect, getCompeticaoById)
router.route('/encerrar/:id').put(protect, isAdmin, encerrarCompeticao)
router.route('/ativas').get(protect, getCompeticoesAtivas)
 
module.exports = router
