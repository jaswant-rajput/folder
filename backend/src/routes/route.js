const {createNote, getNotes,getNoteById,getNotesByQuery,updateByID,updateManyByTitle,deleteById,deleteByTitle,deleteMany}=require('../contollers/controller')
const express=require('express')
const router=express.Router()

router.post('/create-note',createNote)
router.get('/get-all-notes',getNotes)
router.get('/get-note-by-id/:id',getNoteById)
router.get('/get-notes-by-query',getNotesByQuery)
router.patch('/update-by-id',updateByID)
router.patch('/update-many-by-title',updateManyByTitle)
router.delete('/delete-note-by-id/:id',deleteById)
router.delete('/delete-notes-by-query',deleteByTitle)
router.delete('/delete-many',deleteMany)
module.exports=router