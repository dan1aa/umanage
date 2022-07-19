const router = require('express').Router();
const Task = require('../models/Task')

router.get('/', (req, res) => {
    res.render('main', {
        cssFileName: 'main'
    })
})

router.post('/createTask', async (req, res) => {
    let taskValue = req.body.value;
    
    const newTask = new Task({
        title: taskValue
    })

    await newTask.save()
})

module.exports = router;