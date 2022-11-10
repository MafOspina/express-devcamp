const express = require('express')
const { getAllCourses, 
    getSingleCourse,
    updateCourse,
    createCourse, 
    deleteCourse} = require('../controllers/CoursesController')

const router = express.Router()

router.route('/')
    .get(getAllCourses)
    .post(createCourse)
    
router.route('/:id')
    .get(getSingleCourse)
    .put(updateCourse)
    .delete(deleteCourse)

module.exports = router
